import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, ForgotContainer, Title } from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const ForgotPass = () => {
	const initialValues = {
		mail: '',
	};

	const validate = Yup.object().shape({
		mail: Yup.string().email().required('Email is required'),
	});
	const [loading, setLoading] = useState(false)

	const [res, setRes] = useState({})
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validate}
			onSubmit={async (values) => {
				setLoading(true)

				sendPasswordResetEmail(auth, values.mail).then(() => {
					setLoading(false)
					setRes({color:'gray-400', text: 'Check your mail to reset the password'})

				}).catch(() => {
					setRes({color:'red-500', text: 'Invalid email entered'})
					setLoading(false)

				})
			}}
		>
			{(formik) => {
				return (
					<ForgotContainer style={{overflowX:'hidden', width: '100%'}} >
						<Form className='formBox'>
							<Title className='font-title'>Forgot Password</Title>
							<InputField name='mail' type='text' placeholder='Email' />
							{res.text && <p className={`text-${res.color}`}>{res.text}</p>}
							<Button className='inline-flex gap-2 my-2' type='submit'>
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
