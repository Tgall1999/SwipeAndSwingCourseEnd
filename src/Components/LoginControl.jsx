import React from "react";
import Welcome from "./Welcome";
import Signup from "./Signup";
import axios from "axios";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: "code", password: "blogger" },
        { username: "true", password: "codes" },
        { username: "furkan", password: "gulsen" },
        { username: "warren", password: "warren" }
      ],
      welcomeConnect: false,
      trueUsername: "",
      isSign: false,
      isSignUp: false,
      upload: false,
      data: {success: false, courseadmin_id: 10}
    };
    this.new = this.props;
  }

Control = () => {

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    console.log(username.value);
    console.log(password.value);
    console.log(typeof password.value);

    /* let dataForm = new FormData();

    dataForm.append("username", username.value);
    dataForm.append("password", password.value);

    console.log(dataForm); */

    const form = new FormData();
    form.append('username', username.value);
    form.append('password', password.value);


    const response = axios.post('http://100.24.89.174:5000/auth/loginCourse', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((res) =>{
      console.log(res.data);
      console.log("success");
      console.log(new Date());
      console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
      if(res.data.success){
        return this.setState({
          welcomeConnect: true,
          data: res.data
        });
    }
    else{
      alert("Username and Password not in Database")
    }
    }).catch((error) =>{
      if(error.response){
        console.log(error.response.status);
      }
    });

    console.log(this.state.data);

 
    /* fetch('http://100.24.89.174:5000/auth/loginCourse', {
      method: 'POST',
      //mode: 'no-cors',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: dataForm
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      if (res.success == true) {
        console.log('login success');
        // return user id or username
      }
    }); */

    /* var newState = this.state.users.concat(this.new.newUser);
    if (this.new.newUser !== undefined) {
      this.setState({
        users: newState
      });
    }
    this.state.users.map(user => {
      if (
        user.username === username.value &&
        user.password === password.value
      ) {
        return this.setState({
          welcomeConnect: true,
          trueUsername: user.username
        });
      }
    }); */
  };

  SignUp = () => {
    this.setState({ welcomeConnect: false });
    this.setState({ isSign: true });
  };

  render() {
    return (
      <div>
        {this.state.welcomeConnect ? (
          <Welcome uName={this.state.trueUsername} Sdata={this.state.data}/>
        ) : this.state.isSign ? (
          <Signup dataState={this.state} isClick={this.state.welcomeConnect} />
        ) : (
          <div className="main_box--main--login">
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="username"
              autoComplete="false"
            />
            <input
              type="password"
              id="password"
              className="
              form-control"
              placeholder="password"
            />
            <button className="btn btn-success" onClick={this.Control}>
              LOGIN
            </button>
            <p
              onClick={this.SignUp}
              style={{
                textAlign: "center",
                color: "#262626",
                marginTop: "-5px",
                cursor: "pointer"
              }}
            >
              Sign Up
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
