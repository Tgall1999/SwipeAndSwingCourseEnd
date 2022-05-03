import React from "react";
import { useParams } from "react-router-dom";
import TeeTime from "../Components/TeeTime";
import "./TeeTimes.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

const TeeTimes = () => {

    const [isLoading, setLoading] = useState(true);
    const [TT, setTT] = useState([]);

    useEffect(() => {
        // send get request to server
        //setFirstName('First Name');
        console.log("first");

        const response = axios.post('http://100.24.89.174:5000/teetime/getTeetimes', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
            }).then((res) =>{

                console.log(res.data);
                console.log("success");
                if(res.data.success){
                    setLoading(false);
                    console.log("set to false state");
                    setTT(res.data.teetimes);
                    console.log("array");
                    console.log(setTT);
                    console.log("yay");
                }
                else{
                    setLoading(false);
                    console.log("No Teetimes. set to false state");
                    setTT(res.data.teetimes);
                }
            }).catch((error) =>{
                if(error.response){
                 console.log("error");
                 console.log(error.response.status);
            }
            });

    }, []);
    

    const { username , date } = useParams();
    let navigate = useNavigate();

    // Do query here
        const form = new FormData();
        form.append('course_id', username);
        form.append('tt_date', date);
        var teetimesReal = [];


        console.log("sendingg");
        /* const response = axios.post('http://100.24.89.174:5000/teetime/getTeetimes', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
            }).then((res) =>{

                console.log(res.data);
                console.log("success");
                if(res.data.success){
                    teetimesReal = res.data.teetimes;
                    console.log("array");
                    console.log(teetimesReal);
                    console.log("yay");
                }
            }).catch((error) =>{
                if(error.response){
                 console.log(error.response.status);
            }
            }); */

    const teetimes = [
        { time: "12:00", golfer1: "Jae", golfer2: "Timmy", golfer3: "Andy", golfer4: "Ramzi"  },
        { time: "12:15", golfer1: "Jae", golfer2: "Timmy", golfer3: "None", golfer4: "None"  },
        { time: "12:30", golfer1: "Ramzi", golfer2: "Bui", golfer3: "Taeho", golfer4: "Ramzi"  }
      ];

    const back = () =>{
        navigate(`../Test/${username}`, { replace: true });
    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return <div className="main_teetimes_div">
                {TT.map((teetime, index) => (
                    
                    <TeeTime key={index} onClick={console.log("hello")} teetime={teetime}></TeeTime>
                ))}
                <button className="btn btn-success back-btn" onClick={back}>back</button>
            </div>;
}

export default TeeTimes;