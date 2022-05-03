import React, { Component } from 'react'
import LoginControl from "./LoginControl"
import axios from 'axios';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignUp: false,
      newUser: null
    }
  }


  NewUser = () => {
    var username = document.getElementById("signUpUsername").value;
    var password1 = document.getElementById("signUpPassword1").value;
    var password2 = document.getElementById("signUpPassword2").value;
    if(password1 === password2){
      if(username !== ""){
        this.setState({
          isSignUp: true,
          newUser: {username: username, password: password1}
        });

        const form = new FormData();
        form.append('username', username);
        form.append('password', password1);
        form.append('course_id', 2);
    
        const response = axios.post('http://100.24.89.174:5000/auth/registerCourse', form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        }).then((res) =>{
          console.log(res.data);
          console.log("success");
          if(res.data.success){
            console.log("yayyy");
        }
        }).catch((error) =>{
          if(error.response){
            console.log(error.response.status);
          }
        });
      }else{
        alert("User name cannot be blank.")
      }
    }
    else{
      alert("The passwords you entered do not match.");
    }
  }


  render() {
    return (
      <div>
      {
        this.state.isSignUp ?
        <LoginControl newUser={this.state.newUser}/>
        :
        <div className="main_box--main--signUp">
          <input type="text" id="signUpUsername" className="form-control" placeholder="username" autoComplete="false"></input>
          <input type="password" id="signUpPassword1" className="form-control" placeholder="password" ></input>
          <input type="password" id="signUpPassword2" className="form-control" placeholder="re-enter password" ></input>
          <button className="btn btn-success" onClick={this.NewUser}>SIGN UP</button>
        </div>  
      }
      </div>
    )
  }
}

export default Signup;