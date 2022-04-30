import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
	Anchor,
	Button,
	SignInContainer,
	SignInFormCustom,
	Title,
} from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';

const SignIn = ({ signIn }) => {
	let initialValues = {
		mail: '',
		password: '',
	};

	const validate = Yup.object().shape({
		mail: Yup.string().email().required('Email is required'),

		password: Yup.string()
			.min(6, 'Password must be at least 6 charaters')
			.required('Password is required'),
	});

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
					<div>
						<Form>
							<SignInContainer signingIn={signIn}>
								<SignInFormCustom>
									<Title>Sign in</Title>
									<InputField name='mail' type='mail' placeholder='Email' />
									<InputField
										name='password'
										type='password'
										placeholder='Password'
									/>
									<Anchor href='/forgot'>Forgot your password?</Anchor>
									<Button type='submit'>Sign In</Button>
								</SignInFormCustom>
							</SignInContainer>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};

export default SignIn;
