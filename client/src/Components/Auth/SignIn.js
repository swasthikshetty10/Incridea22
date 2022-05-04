import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
	Button,
	SignInContainer,
	SignInFormCustom,
	Title,
} from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';
import { loginUser } from '../../firebaseConfig';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const SignIn = ({ signIn }) => {
	let initialValues = {
		mail: '',
		password: '',
	};
	const [loading, setLoading] = useState(false);
	const successSpan = useRef()
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
			validateOnBlur={false}
			validateOnChange={false}
			onSubmit={async (values) => {
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
						<Form onChange={(e) => {
							formik.setFieldError(e.target.name, "")
							if(successSpan.current.innerHTML !== "")
								successSpan.current.innerHTML = ""
						}} >
							<SignInContainer signingIn={signIn}>
								<SignInFormCustom>
									<Title className='font-title'>Sign in</Title>
									<InputField name='mail' type='mail' placeholder='Email' />
									<InputField
										name='password'
										type='password'
										placeholder='Password'
									/>
									<span className="text-center mt-2" ref={successSpan}></span>
									<Link to="/forgot" className='underline hover:text-igold transition-colors text-white mb-3'>
										Forgot your password?
									</Link>
									<Button className={`inline-flex gap-3 $ mt-2 {loading ? "bg-opacity-50" : ""}`} disabled={loading} type='submit'>
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
