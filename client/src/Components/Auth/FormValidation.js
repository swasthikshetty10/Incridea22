import React from 'react';
import { Formik, Form } from 'formik';
import LoginForm from './LoginForm';
import * as Yup from 'yup';

const FormVaidation = () => {
	const validate = Yup.object({
		firstName: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
		mobnumber: Yup.number().max(10, 'Must be 10 digits').required('Required'),
		email: Yup.string().email('Email is invalid').required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 charaters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Password must match')
			.required('Confirm password is required'),
	});
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: '',
			}}
			validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{(formik) => (
				<div>
					<Form>
						<LoginForm />
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default FormVaidation;
