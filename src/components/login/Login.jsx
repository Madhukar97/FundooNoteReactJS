import React, { Component, useState } from "react";
import {
  Checkbox,
  checkboxClasses,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { loginUser } from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { UserServices } from "../../services/UserService";

const Login = () => {

  let uService = new UserServices();

  let [loginState, setLoginState] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    setLoginState(() => ({
      ...loginState,
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

  let navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    uService.login(loginState).then(function (response) {
      console.log(response);
      localStorage.setItem('fundooUserToken',response.data);
      if(localStorage.getItem('fundooUserToken') === 'Invalid Password'){
        //event.preventDefault();
        console.log("invalid pass");
      }else {
        handleClick();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
      <pre>{JSON.stringify(loginState)}</pre>
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
              <h2>Login to your Fundoo Account</h2>
            </div>
            <form onSubmit={onSubmit}>
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
              <div className="row-pass">
                <div className="login-pass">
                  <TextField
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    size="small"
                    variant="outlined"
                    fullWidth
                    type={state.type}
                    required
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
                <a href="">
                  <button className="btn btn--primary" type="submit" >Sign In</button>
                </a>
                <a href="/forgotpass">forgot password ?</a>
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

export default Login;
