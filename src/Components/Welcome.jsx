import React, { Component } from 'react'
import LoginControl from "./LoginControl"
import UploadTT from './UploadTT';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      upload: false,
      trueUsername: this.props.uName,
      data: this.props.Sdata
    }
  }


  logout = () => {
    console.log("heyyyy");
    this.setState({
           upload: true,
          });
    // var username = document.getElementById("signUpUsername").value;
    // var password1 = document.getElementById("signUpPassword1").value;
    // var password2 = document.getElementById("signUpPassword2").value;
    // if(password1 === password2){
    //   if(username !== ""){
    //     this.setState({
    //       isSignUp: true,
    //       newUser: {username: username, password: password1}
    //     });
    //   }else{
    //     alert("User name cannot be blank.")
    //   }
    // }
    // else{
    //   alert("The passwords you entered do not match.");
    // }
  }


  render() {
    return (
      <div>
      {
        this.state.upload ?
        <LoginControl />
        :
        <div className="main_box--main--signUp">
          {/* <Link to={{
            pathname: '/Test',
            state: {
              usr: this.state.trueUsername
            }
          }}><button className="btn btn-success">Manage Tee Times {this.state.trueUsername}</button></Link> */}
          
          
          <Link to={`/Test/${this.state.data.courseadmin_id}`}><button className="btn btn-success">Manage Tee Times {this.state.datacourseadmin_id}</button></Link>
          <button className="btn btn-success" onClick={this.logout}>Log Out</button>
        </div>
      }
      </div>
    )
  }
}

export default Welcome;