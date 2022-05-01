import React, { useEffect, useRef, useState } from 'react';
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
import { loginUser } from '../../firebaseConfig';
import { AuthContext } from '../../Context/AuthContext';
import { useContext } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const SignIn = ({ signIn }) => {
	let initialValues = {
		mail: '',
		password: '',
	};
	const [loading, setLoading] = useState(false);
	const successSpan = useRef()
	const user = useContext(AuthContext)
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
			onSubmit={async (values) => {
				console.log(values);
				setLoading(true)
				try {
					const res = await loginUser(values.mail, values.password)
					if (res === null) {
						successSpan.current.innerHTML = `<p class="font-semibold text-red-500">Invalid Email or Password</p>`
					}
					setLoading(false)
				} catch {
					successSpan.current.innerHTML = `<p class="font-semibold text-red-500">Invalid Email or Password</p>`
					setLoading(false)
				}
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
									<span className="text-center mt-2" ref={successSpan}></span>

									<Anchor href='/forgot'>Forgot your password?</Anchor>
									<Button disabled={loading} type='submit'>
										{loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>Logging In...</span></> : 'Login'}
									</Button>
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
