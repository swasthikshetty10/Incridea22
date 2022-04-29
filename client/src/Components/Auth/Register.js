import React, { useEffect } from 'react'
import { useParams } from "react-router";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container } from './StyledComponentsLogin';

import {
    Button,
    Div,
    ForgotContainer,
    Select,
    SignInFormCustom,
    SignUpContainer,
    Title,
} from './StyledComponentsLogin';
import {
    GhostButton,
    Overlay,
    LeftOverlayPanel,
    OverlayContainer,
    Paragraph,
    RightOverlayPanel,
} from './StyledComponentsLogin';



import './styles.css';
import InputField from './InputField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';







function Register() {
    const { email } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const HandleSubmit = (value) => {
        const data = { email, ...value }
        axios.post('http://localhost:8080/auth/register', data).then( //register user
            (res) => {
                console.log(data);
                alert('login success') //TODO: for now
                //login user
                //navigate to profile 
            }
        ).catch((res) => {
            console.log(data);
            alert(res) //TODO: alert for now
        })
    }

    useEffect(() => {
        setLoading(true)
        axios.post(`https://end-point`, { //validate email before rendering
            email
        }).then((res => {
            setLoading(false)

        })).catch(res => {
            // uncomment this
            // navigate("/login")
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

        </> :
            <Container className='loginForm'>
                <div className='bg-black text-center p-6 md:p-10 text-white w-full'>
                    <h1 className="py-3 font-semibold text-2xl">Hello {email} <br></br> One Last Step!</h1>
                    <p>Please Enter the details below to register</p>
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
                                    <Title>Enter Your Details Carefully </Title>
                                    <InputField placeholder='Name' name='name' type='text' />
                                    <InputField
                                        name='phNo'
                                        type='text'
                                        placeholder='Mobile Number'
                                    />
                                    <Div>
                                    </Div>
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
                                    <Button type='submit'>Sign Up</Button>
                                </Form>
                            </ForgotContainer>
                        );
                    }}
                </Formik>

            </Container>
    );
};

export default Register
