import React, { useEffect } from 'react'
import { useParams } from "react-router";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container } from './StyledComponentsLogin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import {
    Button,
    Div,
    ForgotContainer,
    Title,
} from './StyledComponentsLogin';



import './styles.css';
import InputField from './InputField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react'
import { auth } from '../../firebaseConfig'
import Loader from '../Gallery2/components/Loader';

function Register() {
    const { email } = useParams();
    const [loading, setLoading] = useState(true);
    const [req, setReq] = useState(false);

    const navigate = useNavigate()
    const user = useContext(AuthContext)

    useEffect(() => {
        if (user) {
            console.log(user)
            navigate("/profile")
        }
    }, [user])
    const HandleSubmit = (value) => {
        const data = { email, ...value }
        setReq(true)
        axios.post('https://peaceful-river-11730.herokuapp.com/auth/register/', data).then( //register user
            async (res) => {
                console.log(data);
                try {
                    console.log()
                    const userCred = await signInWithEmailAndPassword(auth, email, data.password)
                    console.log(userCred.user);
                    navigate('/profile')
                } catch (e) {
                    throw new Error(e)
                }
            }
        ).catch((res) => {
            console.log(data);
            alert(res) //TODO: alert for now
        })
    }

    useEffect(() => {
        setLoading(true)
        axios.post(`https://peaceful-river-11730.herokuapp.com/auth/verifyEmail`, { //Check if email verified and paid and not in participants
            email
        }).then((res => {
            setLoading(false)

        })).catch(res => {
            navigate("/login")
            setLoading(false)
        })

    }, [])


    const initialValues = {
        name: '',
        phNo: '',
        usn: '',
        password: '',
        confirmPassword: '',
    };
    const validate = Yup.object().shape({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        phNo: Yup.string()
            .min(10, 'Must be 10 digits')
            .max(10, 'Must be 10 digits')
            .required('Required'),
        usn: Yup.string().required('USN is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    });
    return (
        loading ? <>
            <Loader fixed="fixed  " animate={true} />
        </> :
<<<<<<< HEAD
            <Container className='loginForm' >
                <div className='bg-black text-center p-6 md:p-10 text-white w-full'>
                    <h1 className="py-3 font-semibold text-2xl font-title" style={{fontFamily:'PlayFair'}}>Hello {email} <br></br> One Last Step!</h1>
                    <p>Please Enter the details below to register</p>
=======
            <Container className='pb-36 lg:pb-5 font-body loginForm'>
                <div className='bg-black text-center p-6 md:p-10 text-white w-full'>
                    <h1 className="py-3 font-semibold text-2xl ">Hello {email} <br></br> One Last Step To Take Off!</h1>
>>>>>>> 4b6484d29a355895ac61dc4dc993b100d408db4b
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={HandleSubmit}
                >
                    {(formik) => {
                        return (
                            <ForgotContainer>
                                <Form className='formBox'>
                                    <Title className=''>Enter Your Details Carefully</Title>
                                    <InputField placeholder='Name' name='name' type='text' />
                                    <InputField
                                        name='phNo'
                                        type='text'
                                        placeholder='Mobile Number'
                                    />


                                    <InputField name='usn' type='tel' placeholder='USN' />
                                    <InputField
                                        name='password'
                                        type='password'
                                        placeholder='Password'
                                    />
                                    <InputField
                                        name='confirmPassword'
                                        type='password'
                                        placeholder='Confirm Password'
                                    />
                                    <Button className={`inline-flex gap-3 ${loading ? "bg-opacity-50" : ""}`} disabled={req} type='submit'>
                                        {req ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>Registering...</span></> : 'Register'}
                                    </Button>
                                    {/* TODO: Add loading animation */}
                                </Form>
                            </ForgotContainer>
                        );
                    }}
                </Formik>

            </Container>
    );
};

export default Register
