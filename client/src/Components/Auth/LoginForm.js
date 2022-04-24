import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
	Anchor,
	Button,
	Container,
	Div,
	FormCustom,
	GhostButton,
	LeftOverlayPanel,
	Overlay,
	OverlayContainer,
	Paragraph,
	RightOverlayPanel,
	Select,
	SignInContainer,
	SignUpContainer,
	Title,
} from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';
import Payment from '../Payments/Payment';

const LoginForm = () => {
	const [signIn, toggle] = useState(true);
	const [amt, SetAmt] = useState(150);
	const [valid, SetValid] = useState(false);

	const initialValues = {
		name: '',
		mobnumber: '',
		mail: '',
		usn: '',
		password: '',
		confirmPassword: '',
	};

	const validate = Yup.object().shape({
		name: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
		mobnumber: Yup.string()
			.min(10, 'Must be 10 digits')
			.max(10, 'Must be 10 digits')
			.required('Required'),

		mail:
			amt === 150
				? Yup.string().required('Email is required')
				: Yup.string().email().required('Email is required'),

		usn: Yup.string().required('USN is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 charaters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Password must match')
			.required('Confirm password is required'),
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
							<div className='loginForm'>
								<Container className='loginForm'>
									<SignUpContainer signingIn={signIn}>
										<FormCustom>
											<Title>Create Account</Title>
											<InputField placeholder='Name' name='name' type='text' />
											<InputField
												name='mobnumber'
												type='text'
												placeholder='Mobile Number'
											/>
											<Select
												onChange={() => {
													const domain = document.getElementById('domain');
													const selected = document.getElementById('selected');
													const values = JSON.parse(selected.value);
													if (!values.isNitte) {
														domain.innerHTML = '';
														SetAmt(250);
													} else {
														domain.innerHTML = '@nmamit.in';
														SetAmt(150);
													}
												}}
												id='selected'
											>
												<option value='{"name":"NMAMIT","isNitte":true}'>
													NMAMIT
												</option>
												<option value='{"name":"MITE","isNitte":false}'>
													MITE
												</option>
												<option value='{"name":"MIT","isNitte":false}'>
													MIT
												</option>
											</Select>
											<Div>
												<InputField
													name='mail'
													type='text'
													placeholder='Email'
												/>
												<p id='domain'>@nmamit.in</p>
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
											<Payment amount={amt} />
											{/* <Button type='submit'>Register and Pay</Button> */}
										</FormCustom>
									</SignUpContainer>
									<SignInContainer signingIn={signIn}>
										<FormCustom>
											<Title>Sign in</Title>
											<InputField
												name='email'
												type='email'
												placeholder='Email'
											/>
											<InputField
												name='password'
												type='password'
												placeholder='Password'
											/>
											<Anchor href='/forgot'>Forgot your password?</Anchor>
											<Button>Sign In</Button>
										</FormCustom>
									</SignInContainer>
									<OverlayContainer signingIn={signIn}>
										<Overlay signingIn={signIn}>
											<LeftOverlayPanel signingIn={signIn}>
												<Title>Welcome Back!</Title>
												<Paragraph>
													To keep connected with us please login with your
													personal info
												</Paragraph>
												<GhostButton type='button' onClick={() => toggle(true)}>
													Sign In
												</GhostButton>
											</LeftOverlayPanel>
											<RightOverlayPanel signingIn={signIn}>
												<Title>Hello, Friend!</Title>
												<Paragraph>
													Enter your personal details and start journey with us
												</Paragraph>
												<GhostButton
													type='button'
													onClick={() => toggle(false)}
												>
													Sign Up
												</GhostButton>
											</RightOverlayPanel>
										</Overlay>
									</OverlayContainer>
								</Container>
							</div>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};

export default LoginForm;
