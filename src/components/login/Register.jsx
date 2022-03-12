import {
  Checkbox,
  checkboxClasses,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { Component, useState } from "react";
import "../login/login.scss";
import { UserServices } from "../../services/UserService";

const Register = () => {

  let userService = new UserServices();

  let [registerState, setRegisterState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setRegisterState(() => ({
      ...registerState,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.value);
  };

  let [state, setState] = React.useState({
    type: "password",
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

  let signUp = (event) => {
    event.preventDefault();
    console.log(registerState);
    userService.register(registerState).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
    console.log("submitted form");
  };

  return (
    <>
      <pre>{JSON.stringify(registerState)}</pre>
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
            <form action="/login" onSubmit={signUp}>
              <div className="row">
                <div className="login-input">
                  <TextField
                    name="firstName"
                    id="outlined-basic"
                    label="First name"
                    size="small"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="login-input">
                  <TextField
                    name="lastName"
                    id="outlined-basic"
                    label="Last name"
                    size="small"
                    variant="outlined"
                    fullWidth
                    required
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className="row">
                <TextField
                  name="email"
                  className="email"
                  id="outlined-basic"
                  label="email"
                  size="small"
                  variant="outlined"
                  helperText="You can use letters, numbers & periods"
                  fullWidth
                  required
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row-pass">
                <div className="login-input">
                  <TextField
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    size="small"
                    variant="outlined"
                    fullWidth
                    required
                    type={state.type}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="login-input">
                  <TextField
                    name="confirmPassword"
                    id="outlined-basic"
                    label="Confirm password"
                    size="small"
                    variant="outlined"
                    fullWidth
                    required
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
                <a href="">
                  <button className="btn btn--primary" type="submit">Sign Up</button>
                </a>
                <a href="/login">Already have an account? SignIn</a>
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

export default Register;
