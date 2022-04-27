import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  Button,
  Div,
  Select,
  SignInFormCustom,
  SignUpContainer,
  Title,
} from './StyledComponentsLogin';
import './styles.css';
import InputField from './InputField';
import Payment from '../Payments/Payment';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
const SignUp = ({ signIn }) => {
  const [amt, SetAmt] = useState(150);
  const [valid, SetValid] = useState(false);
  const [vals, setVals] = useState({});
  const [emailSent, setEmailSent] = useState(false);
  const [isNmamit, setNmamit] = useState(true);
  const [loading, setLoading] = useState(false);
  let initialValues = {
    mail: '',
    // otp: '',
  };

  const validate = Yup.object().shape({
    mail:
      amt === 150
        ? Yup.string().required('Email is required')
        : Yup.string().email().required('Email is required'),
    // otp: Yup.string().required('OTP is Required'),
  });

  const getOTP = async (values) => {
    try {
      await axios.post('http://localhost:8080/auth/generateOtp', {
        email: values.mail,
      });
      alert('Email sent');
      SetValid(true);
      setEmailSent(true);

    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
    setVals(values);
  };

  const validateOTP = async (values) => {
    console.log(values.mail);
    console.log(values.otp);
    try {
      await axios.post('http://localhost:8080/auth/verifyOtp', {
        email: values.mail,
        OTP: values.otp,
      });
      alert('OTP verified!!'); //Change ui later

    } catch (error) {
      setEmailSent(false);
      console.log(error);
      alert(error.response.data);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={async (values) => {
        setLoading(true)
        if (isNmamit && !values.mail.includes(`@nmamit.in`)) {
          values.mail = `${values.mail}@nmamit.in`;
        }
        if (!emailSent) {
          await getOTP(values);
        } else {
          console.log(values);
          await validateOTP(values);
        }
        setLoading(false)
      }}
    >
      {(formik) => {
        return (
          <div>
            <Form>
              <SignUpContainer signingIn={signIn}>
                <SignInFormCustom>
                  <Title>Register</Title>
                  <Select
                    onChange={() => {
                      const domain = document.getElementById('domain');
                      const selected = document.getElementById('selected');
                      const values = JSON.parse(selected.value);
                      if (!values.isNitte) {
                        domain.innerHTML = '';
                        SetAmt(250);
                        setNmamit(false);
                      } else {
                        domain.innerHTML = '@nmamit.in';
                        setNmamit(true);
                        SetAmt(150);
                      }
                    }} //Edited on server
                    id='selected'
                  >
                    <option value='{"name":"NMAMIT","isNitte":true}'>
                      NMAMIT
                    </option>
                    <option value='{"name":"MITE","isNitte":false}'>
                      MITE
                    </option>
                    <option value='{"name":"MIT","isNitte":false}'>MIT</option>
                  </Select>
                  <Div>
                    <InputField name='mail' type='text' placeholder='Email' />
                    <p id='domain'>@nmamit.in</p>
                  </Div>
                  {!emailSent &&


                    <Button type='submit' className={` inline-flex items-center justify-center gap-3  ${loading ? "opacity-90" : "opacity-100"}`} disabled={loading} >
                      {loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>Generating OTP...</span></> : 'Send OTP'}


                    </Button>}
                  {valid ? (
                    <div className=''>
                      <InputField name='otp' type='text' placeholder='OTP' />

                      <Button disabled={loading} className={`${loading ? 'bg-opacity-10' : 'bg-opacity-100'}`} type='submit'>


                        Proceed</Button>
                    </div>
                  ) : (
                    ''
                  )}
                </SignInFormCustom>
              </SignUpContainer>
            </Form>
          </div>
        );
      }}
    </Formik >
  );
};

export default SignUp;
