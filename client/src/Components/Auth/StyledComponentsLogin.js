import styled from 'styled-components/macro';
import { device } from './device';

export const Container = styled.div`
	background-color: #0a0a0a;
	/* border-radius: 10px; */
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	position: relative;
	overflow: hidden;
	width: 100vw;
	height: 100vh;

	@media ${device.tablet} {
		width: 100vw;
		height: 100vh;
		border-radius: 0;
	}
`;

export const SignUpContainer = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
	${(props) =>
		props.signingIn !== true
			? `
  transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	`
			: null}
	@media ${device.tablet} {
		width: 100vw;
		height: 50vh;
		top: 0;
		${(props) =>
			props.signingIn !== true
				? `
  transform: translateY(0);
	opacity: 1;
	z-index: 5;
	`
				: null}
	}
`;

export const SignInContainer = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
	left: 0;
	width: 50%;
	z-index: 2;
	${(props) =>
		props.signingIn !== true ? `transform: translateX(100%);` : null}

	@media ${device.tablet} {
		width: 100vw;
		height: 50vh;
		top: 50%;
		${(props) =>
			props.signingIn !== true ? `transform: translateY(100%);` : null}
	}
`;

export const SignUpFormCustom = styled.div`
	background-color: #0a0a0a;
	padding: 20px 50px;
	height: 100%;
	text-align: center;
	overflow: auto;

	@media ${device.tablet} {
		overflow-y: scroll;
		padding: 20px 20px;
		justify-content: space-between;
	}
`;

export const SignInFormCustom = styled.div`
	background: #9d7643;													//form background										
	background: -webkit-linear-gradient(to bottom right, #262018, #0a0a0a); 
	background: linear-gradient(to bottom right, #262018, #0a0a0a);                	
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 20px 50px;
	height: 100%;
	text-align: center;
	overflow: auto;

	@media ${device.tablet} {
		overflow-y: scroll;
		padding: 20px 20px;
		justify-content: space-between;
	}
`;

export const Title = styled.h1`			//heading text
	font-weight: bold;
	padding-bottom: 20px;
	color: #fff;
	font-size:35px;
	margin: 0;
`;

export const Input = styled.input`  //input
	background-color: #333333;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
	transition: all 0.5s ease;
	color: #fff;
	
	&:focus{
		background-color: #fff;

	}


`;
// :

export const Email = styled.input`
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 2px 0;
	width: 60%;
`;

export const Div = styled.div`
	background-color: #eee;
	border: none;
	padding: 0px 48px 0px 0px;
	margin: 8px 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Select = styled.select`			// dropdown 
	background-color: #eee;  		
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
`;

export const Button = styled.button`
	border-radius: 20px;
	border: 1px solid #9d7643;
	background-color: #9d7643;
	color: #ffffff;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	&:active {
		transform: scale(0.95);
	}
	&:focus {
		outline: none;
	}
`;

export const GhostButton = styled(Button)`
	background-color: transparent;
	border-color: #ffffff;
`;

export const Anchor = styled.a`
	color: #ffffff;					//forgot color white
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
`;

export const OverlayContainer = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
	${(props) =>
		props.signingIn !== true ? `transform: translateX(-100%);` : null}
	@media ${device.tablet} {
		height: 50%;
		width: 100%;
		top: 0;
		left: 0;
		bottom: 50%;
		${(props) =>
			props.signingIn !== true ? `transform: translateY(100%);` : null}
	}
`;

export const Overlay = styled.div`
	background: #9d7643;
	background: -webkit-linear-gradient(to bottom right, #eb9b36, #54350d); //golden color background
	background: linear-gradient(to bottom right, #eb9b36, #54350d);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #ffffff;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
	${(props) =>
		props.signingIn !== true ? `transform: translateX(50%);` : null}

	@media ${device.tablet} {
		left: 0;
		height: 200%;
		width: 100%;
		bottom: -100%;
		transform: translateY(-50%);
		${(props) =>
			props.signingIn !== true ? `transform: translateY(-100%);` : null}
	}
`;

export const OverlayPanel = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;

	@media ${device.tablet} {
		height: 50%;
		width: 100%;
		transform: translateY(0);
	}
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
	transform: translateX(-20%);
	${(props) => (props.signingIn !== true ? `transform: translateX(0);` : null)}

	@media ${device.tablet} {
		top: 50%;
		transform: translateY(20%);
		${(props) =>
			props.signingIn !== true ? `transform: translateY(0);` : null}
	}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
	right: 0;
	transform: translateX(0);
	${(props) =>
		props.signingIn !== true ? `transform: translateX(20%);` : null}

	@media ${device.tablet} {
		bottom: 0;
		transform: translateY(0);
		${(props) =>
			props.signingIn !== true ? `transform: translateY(-20%);` : null}
	}
`;
export const Paragraph = styled.p`
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
`;

export const ForgotContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
