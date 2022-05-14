import React, { useEffect, useState } from 'react';
import './styles.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Container } from './StyledComponentsLogin';
import Navbar from '../Navbar';

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
		if (user) {
			navigate("/profile")
		}
	}, [user])
	return (
		<>
			<Navbar notsticky={true} />
			<div className='loginForm overflow-x-hidden'>
				<Container className='loginForm'>
					<SignUp signIn={signIn} />
					<SignIn signIn={signIn} />
					<OverlayContainer signingIn={signIn}>
						<Overlay signingIn={signIn}>
							<LeftOverlayPanel signingIn={signIn}>
								<Title className='font-title'>Welcome Back Traveller!</Title>
								<Paragraph>
									Hop on in, the journey awaits!
								</Paragraph>
								<GhostButton type='button' onClick={() => toggle(true)}>
									Sign In
								</GhostButton>
							</LeftOverlayPanel>
							<RightOverlayPanel signingIn={signIn}>
								<Title className='font-title'>Hello traveller, time to gear up!</Title>
								<Paragraph>
									The vast expenses of the sky lie uncovered; start your journey with Incridea now!
								</Paragraph>
								<GhostButton disabled={true} type='button' onClick={() => toggle(false)}>
									REGISTRATION CLOSED
								</GhostButton>
							</RightOverlayPanel>
						</Overlay>
					</OverlayContainer>
				</Container>
			</div>
		</>

	);
};

export default LoginForm;
