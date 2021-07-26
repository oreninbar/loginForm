import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormLogic from "./formLogic";
import Validation from "./formValidation";
import "../../css/login.css";
import { useHistory } from "react-router-dom";

const Form = () => {
  let history = useHistory();

  const formSubmitted = () => {
    history.push("/profile", {useremail:inputValues.useremail,userpassword:inputValues.userpassword});
  };

  // const formSubmitted = () => {
  //   history.push({
  //     pathname: '/profile',
  //     state: inputValues
  //    });
  // };

  const { handleInput, inputValues, handleSubmit, errors } = FormLogic(
    formSubmitted,
    Validation
  );

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Log In</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="userEmail" className="form-label email">
            Email
          </label>
          <input
            name="useremail"
            className="form-input"
            placeholder="Enter your email"
            onChange={handleInput}
            values={inputValues.useremail}
          />
          {errors.useremail && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {errors.useremail}
            </p>
          )}
          <label htmlFor="userpassword" className="form-label password">
            Password
          </label>
          <input
            type="text"
            name="userpassword"
            className="form-input"
            placeholder="Enter your password"
            onChange={handleInput}
            values={inputValues.userpassword}
          />
          {errors.userpassword && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {errors.userpassword}
            </p>
          )}

          <button className="form-input-btn" type="submit">
            send
          </button>
          <p>
            <Link to="/reset-password" className="forgot-password">
              Forgot Password
            </Link>
          </p>
        </form>
        <p className="need-an-account">
          Need an account?{" "}
          <span>
            <Link to="/sign-up" className="sign-up">
              SignUp
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Form;
