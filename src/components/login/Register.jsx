import {
  Checkbox,
  checkboxClasses,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { Component } from "react";
import "../login/login.scss";

const Register = () => {
  let [state, setState] = React.useState({
    type: "password"
  });

  const showpass = () => {
    if (state.type === "password") {
      setState({
        type: "text",
      });
    } else {
      setState({
        type: "password",
      });
    }
  };
  const loginMethod = () => {
    window.location.replace("/login");
  };
  return (
    <>
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
              <h2>Create your Fundoo Account</h2>
            </div>
            <div className="row">
              <div className="login-input">
                <TextField
                  id="outlined-basic"
                  label="First name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div className="login-input">
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </div>
            <div className="row">
              <TextField
                className="username"
                id="outlined-basic"
                label="Username"
                size="small"
                variant="outlined"
                helperText="You can use letters, numbers & periods"
                fullWidth
              />
            </div>
            <div className="row-pass">
              <div className="login-input">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  type={state.type}
                />
              </div>
              <div className="login-input">
                <TextField
                  id="outlined-basic"
                  label="Confirm password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  type={state.type}
                />
              </div>
            </div>
            <div className="helperpass">
              <span>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </span>
            </div>
            <div className="showpass">
              <FormControlLabel
                control={<Checkbox onChange={showpass} />}
                label={"show password"}
              ></FormControlLabel>
            </div>
            <div className="signup-button">
              <a href="/login">
                <button className="btn btn--primary" >Sign Up</button>
              </a>
              <a href="/login">Already have an account? SignIn</a>
            </div>
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

export default Register;
