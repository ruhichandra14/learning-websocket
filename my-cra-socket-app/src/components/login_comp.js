import React, { Component } from "react";
import css from "../styles/login.css";
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleUsernameInput (event){
    this.setState({username: event.target.value});
  }

  handlePasswordInput (event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    var reqData = {
      "username": username,
      "password": password
    };
    axios({
      method: 'post',
      url: 'http://localhost:5002/login',
      data: reqData,
      async: true,
      crossDomain: true,
      headers: { 
        "Content-Type": "application/javascript",
        "Cache-Control": "no-cache"
      }
    })
    .then((response) => {
      if(response.data === "success"){
        this.setState({ message: this.props.IsUserLoggedIn});
      }
      else if(response.data === "failure"){
        this.setState({ message: "Invalid username or password"});
      }
      let responseData = response.data;
      this.props.userLoginHandler(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    let loginHTML;
    if(this.props.IsUserLoggedIn === "success"){
      loginHTML = <Link to = "/dashboard" className = "link-dashboard"><input type="submit" value="Login" className="btn btn-login" /></Link>
    }
    else{
      loginHTML = <input type="submit" value="Login" className="btn btn-login"/>;
    }
    return (
      <section className = "form-container" >
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username" className="label-username">Username</label>
          <input type="username" className="input-username" onChange={ this.handleUsernameInput } value={ this.state.username }/>
          <label htmlFor="password" className="label-password">Password</label>
          <input type="password" className="input-password" onChange={ this.handlePasswordInput  } value={ this.state.password }/>
          {loginHTML}
        </form>
        <p className = "error-msg login-error-msg">{this.state.message}</p>
      </section>
    )
  }
}