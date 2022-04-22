import React, { useState } from 'react';
import Payment from '../Payments/Payment';
import {
	// Anchor,
	Button,
	Container,
	Div,
	Email,
	FormCustom,
	GhostButton,
	Input,
	LeftOverlayPanel,
	Overlay,
	OverlayContainer,
	Paragraph,
	RightOverlayPanel,
	Select,
	SignInContainer,
	SignUpContainer,
	Title,
} from '../Payments/StyledComponentsLogin';
import '../Payments/styles.css';

const LoginForm = () => {
	const [signIn, toggle] = useState(true);
	const [amt, SetAmt] = useState(150);
	return (
		<div className='loginForm'>
			<Container className='loginForm'>
				<SignUpContainer signingIn={signIn}>
					<FormCustom>
						<Title>Create Account</Title>
						<Input name='firstName' type='text' placeholder='Name' />
						<Input name='mobnumber' type='tel' placeholder='Mobile Number' />
						<Select
							onChange={() => {
								const domain = document.getElementById('domain');
								const selected = document.getElementById('selected');
								const values = JSON.parse(selected.value);
								if (!values.isNitte) {
									domain.innerHTML = '';
									SetAmt(200);
								} else {
									domain.innerHTML = '@nmamit.in';
									SetAmt(150);
								}
							}}
							id='selected'
						>
							<option value='{"name":"NMAMIT","isNitte":true}'>NMAMIT</option>
							<option value='{"name":"MITE","isNitte":false}'>MITE</option>
							<option value='{"name":"MIT","isNitte":false}'>MIT</option>
						</Select>
						<Div>
							<Email type='text' placeholder='Email' />
							<p id='domain'>@nmamit.in</p>
						</Div>
						<Input type='tel' placeholder='USN' />
						<Input type='password' placeholder='Password' />
						<Payment amount={amt} />
					</FormCustom>
				</SignUpContainer>
				<SignInContainer signingIn={signIn}>
					<FormCustom>
						<Title>Sign in</Title>
						<Input type='email' placeholder='Email' />
						<Input type='password' placeholder='Password' />
						{/* <Anchor href='#'>Forgot your password?</Anchor> */}
						<Button>Sign In</Button>
					</FormCustom>
				</SignInContainer>
				<OverlayContainer signingIn={signIn}>
					<Overlay signingIn={signIn}>
						<LeftOverlayPanel signingIn={signIn}>
							<Title>Welcome Back!</Title>
							<Paragraph>
								To keep connected with us please login with your personal info
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
							<GhostButton type='button' onClick={() => toggle(false)}>
								Sign Up
							</GhostButton>
						</RightOverlayPanel>
					</Overlay>
				</OverlayContainer>
			</Container>
		</div>
	);
};

export default LoginForm;
