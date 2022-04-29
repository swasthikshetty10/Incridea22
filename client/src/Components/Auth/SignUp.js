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
import { colleges } from '../../colleges';
import { useNavigate } from 'react-router-dom';
const SignUp = ({ signIn }) => {
  const [amt, SetAmt] = useState(150);
  const [valid, SetValid] = useState(false);
  const [vals, setVals] = useState({});
  const [emailSent, setEmailSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false)
  const [isNmamit, setNmamit] = useState(true);
  const [loading, setLoading] = useState(false);
  const successSpan = useRef()
  const navigate = useNavigate()
  let initialValues = {
    mail: '',
    otp: '',
    college: colleges[0]
  };

  const validate = Yup.object().shape({
    mail:
      amt === 150
        ? Yup.string().required('Email is required')
        : Yup.string().email().required('Email is required'),
  });

  const clearMsg = () => {
    successSpan.current.innerHTML = `<p class="font-semibold text-green-600"></p>`
  }
  const getOTP = async (values) => {
    try {
      await axios.post('http://localhost:8080/auth/generateOtp', {
        email: values.mail,
        collegeName: values.college
      });
      successSpan.current.innerHTML = `<p class="font-semibold text-green-600">Email sent!</p>`
      SetValid(true);
      setEmailSent(true);

    } catch (error) {
      console.log(error);
      if (error.response.status === 300) {
        navigate(`/register/${values.mail}`)
      }
      successSpan.current.innerHTML = `<p class="font-semibold text-red-600">${error.response.data}</p>`

    }
    setVals(values);
  };

  const validateOTP = async (values) => {
    try {
      await axios.post('http://localhost:8080/auth/verifyOtp', {
        email: values.mail,
        OTP: values.otp,
      });
      successSpan.current.innerHTML = `<p class="font-semibold text-green-600">${"Email Verified"}</p>`
      setOtpVerified(true)
    } catch (error) {
      console.log(error);
      successSpan.current.innerHTML = `<p class="font-semibold text-red-600">${error.response.data}</p>`//NOTE:
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
                      formik.setFieldValue('college', values.name);
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
                    name="college"
                  >
                    {
                      colleges.map(college => ([
                        <option key={college} value={`{ "name": "${college}", "isNitte": ${college === "NMAM INSTITUTE OF TECHNOLOGY"} }`}>{college}</option>
                      ]))
                    }
                  </Select>
                  <Div>
                    <InputField disabled={valid} name='mail' type='text' placeholder='Email' />
                    <p id='domain'>@nmamit.in</p>
                  </Div>
                  {!emailSent &&


                    <Button onClick={clearMsg} type='submit' className={` inline-flex items-center justify-center gap-3  ${loading ? "opacity-90" : "opacity-100"}`} disabled={loading} >
                      {loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>Sending Email...</span></> : 'Send Verification Email'}


                    </Button>}
                  {!otpVerified && valid && (
                    <div className=''>
                      <InputField onChange={(e) => {
                        if (e.target.value.length > 6)
                          return;
                        formik.setFieldValue('otp', e.target.value);
                      }} name='otp' type='number' className='text-center' placeholder='OTP' />
                      <Button onClick={clearMsg} className={` inline-flex items-center justify-center gap-3  ${loading ? "opacity-90" : "opacity-100"}`} disabled={loading}>
                        {loading ? <> <AiOutlineLoading3Quarters className=" animate-spin text-lg " /> <span className=''>Verifying...</span></> : 'Verify'}
                      </Button>
                      <br />

                    </div>
                  )}
                  <span className="text-center mt-2" ref={successSpan}></span>
                  {
                    valid && !otpVerified && <>
                      <p>Having trouble? <button onClick={() => {
                        clearMsg()
                        SetValid(false); setEmailSent(false)
                        clearMsg();

                      }} className='inline underline text-blue-800'>Resend OTP</button></p>

                    </>
                  }
                  {otpVerified && <Payment email={formik.values.mail} successSpan={successSpan} clearMsg={clearMsg} className="mt-1" type="button" />}

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
