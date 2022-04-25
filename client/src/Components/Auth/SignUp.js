import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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

const SignUp = ({ signIn }) => {
  const [amt, SetAmt] = useState(150);
  const [valid, SetValid] = useState(false);
  const [vals, setVals] = useState({});
  const [emailSent, setEmailSent] = useState(false);

  let initialValues = {
    mail: "",
    otp: "",
  };

  const validate = Yup.object().shape({
    mail:
      amt === 150
        ? Yup.string().required("Email is required")
        : Yup.string().email().required("Email is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={async (values) => {
        // console.log(values);
        try {
          await axios.post("http://localhost:8080/auth/generateOtp", {
            email: values.mail,
          });
          alert("Email sent");
          SetValid(true);
          setEmailSent(true);
        } catch (error) {
          alert(error);
        }
        setVals(values);
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
                      const domain = document.getElementById("domain");
                      const selected = document.getElementById("selected");
                      const values = JSON.parse(selected.value);
                      if (!values.isNitte) {
                        domain.innerHTML = "";
                        SetAmt(250);
                      } else {
                        domain.innerHTML = "@nmamit.in";
                        SetAmt(150);
                      }
                    }} //Edited on server
                    id="selected"
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
                    <InputField name="mail" type="text" placeholder="Email" />
                    <p id="domain">@nmamit.in</p>
                  </Div>
                  {!emailSent && <Button type="submit">Send OTP</Button>}
                  {valid ? (
                    <div className="">
                      <InputField name="otp" type="text" placeholder="OTP" />

                      <Button
                        type="button"
                        onClick={async () => {
                          try {
                            await axios.post(
                              "http://localhost:8080/auth/verifyOtp",
                              {
                                email: formik.values.mail,
                                OTP: formik.values.otp,
                              }
                            );
                            alert("OTP verified!!"); //Change ui later
                          } catch (error) {
                            setEmailSent(false);
                            console.log(error);
                            alert(error);
                          }
                        }}
                      >
                        Proceed
                      </Button>
                    </div>
                  ) : (
                    ""
                  )}
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
