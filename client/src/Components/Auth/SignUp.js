import React, { useState, useRef } from 'react';
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
  const successSpan = useRef()
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

  const clearMsg = () => {
    successSpan.current.innerHTML = `<p class="font-semibold text-green-600"></p>`
  }
  const getOTP = async (values) => {
    try {
      await axios.post('http://localhost:8080/auth/generateOtp', {
        email: values.mail,
      });
      successSpan.current.innerHTML = `<p class="font-semibold text-green-600">Email sent !!</p>`
      SetValid(true);
      setEmailSent(true);

    } catch (error) {
      console.log(error);
      // alert(error.response.data);
      successSpan.current.innerHTML = `<p class="font-semibold text-red-600">${error.response.data}</p>`

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
      //alert('OTP verified!!'); //Change ui later
      successSpan.current.innerHTML = `<p class="font-semibold text-green-600">${"OTP verified!!"}</p>`
    } catch (error) {
      console.log(error);
      //alert(error.response.data);
      successSpan.current.innerHTML = `<p class="font-semibold text-red-600">${error.response.data}</p>`
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
                    disabled={valid}
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
                    <InputField disabled={valid} name='mail' type='text' placeholder='Email' />
                    <p id='domain'>@nmamit.in</p>
                  </Div>
                  {!emailSent &&


                    <Button type='submit' className={` inline-flex items-center justify-center gap-3  ${loading ? "opacity-90" : "opacity-100"}`} disabled={loading} >
                      {loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>Generating OTP...</span></> : 'Send OTP'}


                    </Button>}
                  {valid ? (
                    <div className=''>
                      <InputField name='otp' type='text' placeholder='OTP' />
                      <Button className={` inline-flex items-center justify-center gap-3  ${loading ? "opacity-90" : "opacity-100"}`} disabled={loading}>
                        {loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>verifying</span></> : 'Proceed'}
                      </Button>
                      <br />

                    </div>
                  ) : (
                    ''
                  )}
                  <span className="text-center mt-2" ref={successSpan}></span>
                  {
                    valid && <>
                      <p>Having trouble verifying via email?</p>
                      <button onClick={() => {
                        SetValid(false); setEmailSent(false)
                        clearMsg();

                      }} className='underline text-blue-800'>resend OTP</button>
                    </>
                  }
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
