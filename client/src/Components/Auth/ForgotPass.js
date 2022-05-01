import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, ForgotContainer, Title } from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const ForgotPass = () => {
	const initialValues = {
		mail: '',
	};

	const validate = Yup.object().shape({
		mail: Yup.string().email().required('Email is required'),
	});
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validate}
			onSubmit={async (values) => {
				setLoading(true)

				sendPasswordResetEmail(auth, values.mail).then(() => {
					setLoading(false)
					alert(`Check ${values.mail} mail to reset the password`);
					navigate("/login")
				}).catch(() => {
					alert("Some thing went wrong")
					navigate("/login")
				})
			}}
		>
			{(formik) => {
				return (
					<ForgotContainer style={{overflowX:'hidden'}} className='overflow-x-hidden'>
						<Form className='formBox'>
							<Title>Forgot Password</Title>
							<InputField name='mail' type='text' placeholder='Email' />
							<Button className='inline-flex gap-2' type='submit'>
								{loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>Sending Email..</span></> : 'Reset Password'}

							</Button>
						</Form>
					</ForgotContainer>
				);
			}}
		</Formik>
	);
};

export default ForgotPass;
