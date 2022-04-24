import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, ForgotContainer, Title } from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';

const ForgotPass = () => {
	const initialValues = {
		email: '',
		otp: '',
		newPassword: '',
		confirmNewPassword: '',
	};

	const validate = Yup.object().shape({
		mail: Yup.string().email().required('Email is required'),
		otp: Yup.number().max(6, 'Must be 6 digits').required('Required'),
		newPassword: Yup.string()
			.min(6, 'Password must be at least 6 charaters')
			.required('Password is required'),
		confirmNewPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Password must match')
			.required('Confirm password is required'),
	});

	const generateOTP = () => {};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{(formik) => {
				return (
					<ForgotContainer>
						<Form className='formBox'>
							<Title>Forgot Password</Title>
							<InputField name='mail' type='text' placeholder='Email' />
							<Button type='button' onClick={generateOTP}>
								Send OTP
							</Button>
							<InputField name='otp' type='text' placeholder='OTP' />
							<InputField
								name='newPassword'
								type='password'
								placeholder='New Password'
							/>
							<InputField
								name='confirmNewPassword'
								type='password'
								placeholder='Confirm New Password'
							/>
							<Button type='submit'>Reset</Button>
						</Form>
					</ForgotContainer>
				);
			}}
		</Formik>
	);
};

export default ForgotPass;
