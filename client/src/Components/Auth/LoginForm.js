import React, { useEffect, useState } from 'react';
import './styles.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Container } from './StyledComponentsLogin';

import {
	GhostButton,
	Overlay,
	LeftOverlayPanel,
	OverlayContainer,
	Paragraph,
	RightOverlayPanel,
	Title,
} from './StyledComponentsLogin';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [signIn, toggle] = useState(true);
	const user = useContext(AuthContext)
	const navigate = useNavigate()
	useEffect(() => {
		console.log(user)
		if (user) {
			navigate("/profile")
		}
	}, [user])
	return (
		<div className='loginForm'>

			<Container className='loginForm'>
				<SignUp signIn={signIn} />
				<SignIn signIn={signIn} />
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
