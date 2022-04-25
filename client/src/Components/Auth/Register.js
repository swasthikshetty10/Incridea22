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
import Payment from '../Payments/Payment';

const Register = () => {
	const [amt, SetAmt] = useState(150);
	const [valid, SetValid] = useState(false);

	const initialValues = {
		mail: '',
	};

	const validate = Yup.object().shape({
		mail:
			amt === 150
				? Yup.string().required('Email is required')
				: Yup.string().email().required('Email is required')
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validate}
			onSubmit={(values) => {
				SetValid(true);
			}}
		>
			{(formik) => {
				return (
					<ForgotContainer>
						<Form className='formBox'>
							<Title>Register</Title>
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
							<Button type='submit'>Send OTP</Button>
							{valid ? (
								<div className=''>
									<InputField name='otp' type='text' placeholder='OTP' />
									<Payment amount={amt} />
								</div>
							) : (
								''
							)}
						</Form>
					</ForgotContainer>
				);
			}}
		</Formik>
	);
};

export default Register;
