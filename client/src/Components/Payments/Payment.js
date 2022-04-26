import React from "react";
import { Button } from "../Auth/StyledComponentsLogin";

const Payment = ({ amount }) => {
  const isDate = (val) => {
    return Object.prototype.toString.call(val) === "[object Date]";
  };

  const isObj = (val) => {
    return typeof val === "object";
  };

  const stringifyValue = (val) => {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  };

  const buildForm = ({ action, params }) => {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  };

  const post = (details) => {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  };

  const getData = (data) => {
    return fetch(`http://localhost:8080/api/payment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const makePayment = () => {
    getData({ amount: amount, email: "incrideademo@gmail.com" }).then(
      (response) =>
        post({
          action: "https://securegw-stage.paytm.in/order/process",
          params: response,
        })
    );
  };
  return (
    <>
      <Button type="button" onClick={makePayment}>
        Proceed
      </Button>
    </>
  );
};

export default Payment;
