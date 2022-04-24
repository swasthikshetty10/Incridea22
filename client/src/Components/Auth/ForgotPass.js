import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, ForgotContainer, Title } from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';

const ForgotPass = () => {
	const initialValues = {
		mail: '',
	};

	const validate = Yup.object().shape({
		mail: Yup.string().email().required('Email is required'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validate}
			onSubmit={(values) => {
				alert(`Check ${values.mail} mail to reset the password`);
			}}
		>
			{(formik) => {
				return (
					<ForgotContainer>
						<Form className='formBox'>
							<Title>Forgot Password</Title>
							<InputField name='mail' type='text' placeholder='Email' />
							<Button type='submit'>Reset Password</Button>
						</Form>
					</ForgotContainer>
				);
			}}
		</Formik>
	);
};

export default ForgotPass;
