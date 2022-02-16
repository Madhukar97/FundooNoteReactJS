import React, { Component, useState } from "react";
import {
  Checkbox,
  checkboxClasses,
  FormControlLabel,
  TextField,
} from "@mui/material";

const ResetPass = () => {
  let [resetpassState, setResetPassState] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  const onChangeHandler = (event) => {
    setResetPassState(() => ({
      ...resetpassState,
      [event.target.name]: event.target.value,
    }));
  };

  let [state, setState] = useState({
    type: "password",
  });

  const showpass = (event) => {
    let check = event.target.checked;
    console.log(check);
    if (check) {
      setState({
        type: "text",
      });
    } else {
      setState({
        type: "password",
      });
    }
  };
  return (
    <>
      <pre>{JSON.stringify(resetpassState)}</pre>
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
              <h2>Reset your password</h2>
            </div>
            <form action="/login">
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
                />
              </div>
              <div className="row">
                <TextField
                  name="newPassword"
                  id="outlined-basic"
                  label="Enter New Password"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                  type={state.type}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row-pass">
                <div className="login-pass">
                  <TextField
                    name="confirmNewPassword"
                    id="outlined-basic"
                    label="Confirm New Password"
                    size="small"
                    variant="outlined"
                    fullWidth
                    required
                    type={state.type}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
              <div className="showpass">
                <FormControlLabel
                  control={<Checkbox onChange={showpass} />}
                  label={"show password"}
                ></FormControlLabel>
              </div>
              <div className="signup-button">
                <a href="/login">
                  <button className="btn btn--primary">Reset Password</button>
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

export default ResetPass;
