import React, { useState, useRef } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import {
  Button,
  Div,
  Select,
  SignInFormCustom,
  SignUpContainer,
  Title,
} from "./StyledComponentsLogin";
import "./styles.css";
import InputField from "./InputField";
import Payment from "../Payments/Payment";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { colleges } from "../../colleges";

import { useNavigate } from "react-router-dom";
const SignUp = ({ signIn }) => {
  const [valid, SetValid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isNmamit, setNmamit] = useState(true);
  const [loading, setLoading] = useState(false);
  const successSpan = useRef();
  const navigate = useNavigate();
  let initialValues = {
    mail: "",
    otp: "",
    college: colleges[0],
  };

  // const validate = Yup.object().shape({
  //   mail:
  //     amt === 150
  //       ? Yup.string().required('Email is required')
  //       : Yup.string().email().required('Email is required'),
  // });

  const clearMsg = () => {
    successSpan.current.innerHTML = "";
  };
  const getOTP = async (values) => {
    try {
      await axios.post(
        "https://peaceful-river-11730.herokuapp.com/auth/generateOtp",
        {
          email: values.mail,
          collegeName: values.college,
        }
      );
      successSpan.current.innerHTML = `<p class="font-semibold text-green-600">Email sent!</p>`;
      SetValid(true);
      setEmailSent(true);
    } catch (error) {
      if (error.response.status === 300) {
        navigate(`/register/${values.mail.toLowerCase()}`);
      }
      throw error;
    }
  };

  const validateOTP = async (values) => {
    try {
      await axios.post(
        "https://peaceful-river-11730.herokuapp.com/auth/verifyOtp",
        {
          email: values.mail,
          OTP: values.otp,
        }
      );
      successSpan.current.innerHTML = `<p class="font-semibold text-green-600">${"Email Verified"}</p>`;
      setOtpVerified(true);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validate}
      onSubmit={async (values) => {
        setLoading(true);
        values.mail = values.mail.toLowerCase().replace(/\s+/g, ""); //remove whitespaces
        if (isNmamit && !values.mail.includes(`@nmamit.in`)) {
          values.mail = `${values.mail}@nmamit.in`;
        }
        try {
          if (!emailSent) {
            await getOTP(values);
          } else {
            await validateOTP(values);
          }
        } catch (error) {
          successSpan.current.innerHTML = `<p class="font-semibold text-red-600">${
            error.response?.data || "Something went wrong :/"
          }</p>`; //NOTE:
        }
        setLoading(false);
      }}
    >
      {(formik) => {
        return (
          <div>
            <Form
              onChange={() => {
                if (successSpan.current.innerHTML !== "") clearMsg();
              }}
            >
              <SignUpContainer signingIn={signIn}>
                <SignInFormCustom>
                  <Title className="font-title">Register</Title>
                  <Select
                    className="group bg-[#333] text-[#eee]"
                    disabled={valid}
                    onChange={(e) => {
                      formik.setFieldValue("college", e.target.value);
                      if (e.target.value !== "NMAM INSTITUTE OF TECHNOLOGY") {
                        setNmamit(false);
                      } else {
                        setNmamit(true);
                      }
                    }} //Edited on server
                    id="selected"
                    name="college"
                  >
                    {colleges.map((college) => [
                      <option key={college} value={college}>
                        {college}
                      </option>,
                    ])}
                  </Select>
                  <Div className="group bg-[#333] text-[#eee]">
                    <InputField
                      className="  focus:outline-none focus:border-0"
                      disabled={valid}
                      name="mail"
                      type={isNmamit ? "text" : "email"}
                      placeholder={isNmamit ? "USN" : "Email"}
                    />
                    {isNmamit && <p>@nmamit.in</p>}
                  </Div>
                  {!emailSent && (
                    <Button
                      onClick={clearMsg}
                      type="submit"
                      className={`mt-2 inline-flex items-center justify-center gap-3  ${
                        loading ? "opacity-90" : "opacity-100"
                      }`}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          {" "}
                          <AiOutlineLoading3Quarters className=" animate-spin text-lg " />{" "}
                          <span className="">Hold on</span>
                        </>
                      ) : (
                        "Proceed"
                      )}
                    </Button>
                  )}

                  <p className="text-white text-sm p-2">
                    Having trouble signing up?
                    <br />{" "}
                    <a
                      href={`tel:9620788383`}
                      className="text-igold transition-colors hover:text-white"
                    >
                      call us 24/7
                    </a>
                  </p>

                  {!otpVerified && valid && (
                    <div className="">
                      <InputField
                        onChange={(e) => {
                          if (e.target.value.length > 6) return;
                          formik.setFieldValue("otp", e.target.value);
                        }}
                        name="otp"
                        type="tel"
                        className="text-center"
                        placeholder="OTP"
                      />
                      <Button
                        onClick={clearMsg}
                        className={` inline-flex items-center justify-center gap-3  ${
                          loading ? "opacity-90" : "opacity-100"
                        }`}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            {" "}
                            <AiOutlineLoading3Quarters className=" animate-spin text-lg " />{" "}
                            <span className="">Verifying...</span>
                          </>
                        ) : (
                          "Verify"
                        )}
                      </Button>
                      <br />
                    </div>
                  )}
                  <span className="text-center mt-2" ref={successSpan}></span>
                  {valid && !otpVerified && (
                    <>
                      <p className="text-white ">
                        Having trouble?{" "}
                        <button
                          onClick={() => {
                            SetValid(false);
                            setEmailSent(false);
                            clearMsg();
                          }}
                          className="inline underline text-igold"
                        >
                          Resend OTP
                        </button>
                      </p>
                    </>
                  )}

                  {otpVerified && (
                    <Payment
                      email={formik.values.mail.toLowerCase()}
                      successSpan={successSpan}
                      clearMsg={clearMsg}
                      className="mt-1"
                      type="button"
                    />
                  )}
                  {
                    <div className="mt-5 text-left ">
                      <h3 className="text-md font-bold text-gray-300 mb-1">
                        <MdOutlineNotificationImportant className="inline text-igold" />{" "}
                        PLEASE NOTE
                      </h3>

                      <ul className="list-inside list-disc text-sm marker:text-igold text-gray-400">
                        <li>
                          NMAMIT students pay ₹ 150/- and get access to all
                          events including pronites.
                        </li>
                        <li>
                          Other Engg. institutes and sister institutes of NMAMIT
                          pay ₹ 250/- and get access to all events including
                          pronites.{" "}
                        </li>
                        <li>
                          Non-Engg. UG institutes other than sister institutes
                          of NMAMIT pay ₹ 250/- and get access to all CORE
                          events only. Entry into pronites will only be given
                          upon attending atleast one of the CORE events.{" "}
                        </li>
                        <li>We hold no refund policies.</li>
                      </ul>
                    </div>
                  }
                </SignInFormCustom>
              </SignUpContainer>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignUp;
