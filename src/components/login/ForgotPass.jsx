import React, { Component, useState } from "react";
import {
  Checkbox,
  checkboxClasses,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { UserServices } from "../../services/UserService";

const ForgotPass = () => {

  let userService = new UserServices();

  let [forgotPassState, setForgotPassState] = useState({
    email: ""
  });

  const onChangeHandler = (event) => {
    setForgotPassState(() => ({
      ...forgotPassState,
      [event.target.name]: event.target.value,
    }));
  };

  let [msg, setMsg] = useState("");

  let onSubmit = (event) => {
    event.preventDefault();
    setMsg("Email has been sent! Please check your in-box for reset password link.");
    userService.forgotPass(forgotPassState.email).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <>
      <pre>{JSON.stringify(forgotPassState)}</pre>
      <div className="container">
        <div className="card">
          <div className="leftContainer">
            <div className="title">
              <h1>
                <span style={{ color: "#FF0000" }}>F</span>
                <span style={{ color: "#66CC66" }}>u</span>
                <span style={{ color: "#FF9966" }}>n</span>
                <span style={{ color: "#4285F4" }}>d</span>
                <span style={{ color: "#FF0066" }}>o</span>
                <span style={{ color: "#0F9D58" }}>o</span>
              </h1>
            </div>
            <div className="msg">
              <h2>Enter your email to send reset password link</h2>
            </div>
            <form action="" onSubmit={onSubmit}>
              <div className="row">
                <TextField
                  name="email"
                  id="outlined-basic"
                  label="email"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={onChangeHandler}
                  helperText={msg}
                />
              </div>
              <div className="signup-button">
                <a href="/login">
                  <button className="btn btn--primary">Send Link</button>
                </a>
              </div>
            </form>
          </div>
          <div className="rightContainer">
            <img
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt="logo"
              width="244px"
              heigh="244px"
            ></img>
            <p>One account. All of Fundoo working for you.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
