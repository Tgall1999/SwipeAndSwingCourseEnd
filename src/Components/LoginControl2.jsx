import React, {useState} from "react";
import Welcome from "./Welcome";
import Signup from "./Signup";
import axios from "axios";

function LoginControl2({props}) {
    const [welcomeConnect, setWelcomeConnect] = useState(false);
    const [trueUsername, setTrueUsername] = useState("");
    const [isSign, setIsSign] = useState(false);    
    const [isSignUp, setIsSignUp] = useState(false);
    const [upload, setUpload] = useState(false);

    function login(username, password) {
        let dataForm = new FormData();

        dataForm.append("username", username);
        dataForm.append("password", password);
        console.log('data form: ');
        console.log(dataForm.entries);
        return fetch('http://100.24.89.174:5000/auth/loginCourse', {
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
        })
    }

    function control() {
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        console.log(username.value);
        console.log(password.value);
        login(username.value, password.value)
        .then((res) => {
            console.log('got a response');
            console.log(res);
        })

        //console.log(dataForm.entries);

        
    }

    function SignUp() {
        setWelcomeConnect(false);
        setIsSign(true);
    }

    return (
        <div>
        {welcomeConnect ? (
          <Welcome uName={trueUsername} />
        ) : isSign ? (
          <Signup isClick={welcomeConnect} />
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
            <button className="btn btn-success" onClick={control}>
              LOGIN
            </button>
            <p
              onClick={SignUp}
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
    )
}

class LoginControl extends React.Component {

Control = () => {

    

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

  

}

export default LoginControl2;
