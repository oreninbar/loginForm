import React from "react";
import "../../css/login.css";
import {Link} from 'react-router-dom'
import FormLogic from "../login/formLogic";
import Validation from "../login/formValidation";


const ResetPassword = (props) => {
  const { handleInput, inputValues, handleSubmit, errors } = FormLogic(
    props.formSubmitted,
    Validation
  );

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Reset Password</h1>
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

          <button className="form-input-btn" type="submit">
            Reset Password
          </button>
          <p>
          <Link to="/" className="sign-up">
              Login
            </Link>
          </p>
        </form>
      </div>
      <p className="need-an-account">
          Need an account?{" "}
          <span>
            <Link to="/sign-up" className="sign-up">
              SignUp
            </Link>
          </span>
        </p>
    </div>
  );
};
export default ResetPassword;
