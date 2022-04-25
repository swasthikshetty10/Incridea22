import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
	Button,
	Div,
	ForgotContainer,
	Select,
	Title,
} from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';

const UserInput = () => {
	const [amt, SetAmt] = useState(150);

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
					<ForgotContainer>
						<Form className='formBox'>
							<Title>UserInput</Title>
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
								<option value='{"name":"NMAMIT","isNitte":true}'>NMAMIT</option>
								<option value='{"name":"MITE","isNitte":false}'>MITE</option>
								<option value='{"name":"MIT","isNitte":false}'>MIT</option>
							</Select>
							<Div>
								<InputField name='mail' type='text' placeholder='Email' />
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
							<Button type='submit'>Sign Up</Button>
						</Form>
					</ForgotContainer>
				);
			}}
		</Formik>
	);
};

export default UserInput;
