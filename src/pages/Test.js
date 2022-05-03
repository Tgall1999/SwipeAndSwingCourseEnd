import React, {useState,useEffect} from "react";
import "./Tests.css";
import { useParams, useLocation } from "react-router-dom";
import DatePicker from 'sassy-datepicker';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Test = () => {

    // console.log(useLocation().state);
    // const { usr } = useLocation().state;
    // console.log(usr);

    const [ttDate, setttDate] = useState('');
    const { username } = useParams();
    let navigate = useNavigate();

    function handleTtDate(event) {
        setttDate(event.target.value);
        console.log(event.target.value);
    }

    function toNiceDate(date) {

        const monthsShort = {
            Jan: '01',
            Feb: '02',
            Mar: '03',
            Apr: '04',
            May: '05',
            Jun: '06',
            Jul: '07',
            Aug: '08',
            Sep: '09',
            Oct: '10',
            Nov: '11',
            Dec: '12',
          };

        var date2 = date.slice(7,15);
        console.log(date2);
        var month= monthsShort[date.slice(4,7)];
        var date3 = month + date2;
        console.log(date3);
        return(date3.replaceAll(' ','-'));
    }

    function handleSubmit(event) {
        var ttDateNice = ttDate.replace('T', ' ').replaceAll('-',' ')
        var ttDateTimeFinal = ttDateNice.slice(5,7) + '-' + ttDateNice.slice(8,10) + '-' + ttDateNice.slice(0,4) + ' ' + ttDateNice.slice(11);
        console.log(ttDateTimeFinal);
        var ttFinalDate = ttDateTimeFinal.slice(0,10);
        var ttFinalTime = ttDateTimeFinal.slice(11);
        console.log(ttFinalDate);
        console.log(ttFinalTime);

        const form = new FormData();
        form.append('course_id', username);
        form.append('tt_time', ttFinalTime);
        form.append('tt_date', ttFinalDate);


        console.log("sending");
        const response = axios.post('http://100.24.89.174:5000/teetime/uploadTeetime', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
            }).then((res) =>{

                console.log(res.data);
                console.log("success");
                if(res.data.success){
                    console.log("yay");
                }
            }).catch((error) =>{
                if(error.response){
                 console.log(error.response.status);
            }
            });

        event.preventDefault();
    }

    const onChange = (date) => {
        console.log(date.toString());
        var niceDate = toNiceDate(date.toString());
        console.log(niceDate);
        navigate(`../TeeTimes/${username}/${niceDate}`, { replace: true });
    }

    const backHome = () => {
        navigate("/", { replace: true });
    }

    return  <div className="main_div">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
                <div className="upper_div">
                    <button className="logout-btn btn btn-success" onClick={backHome}><i class="fa fa-home"></i></button>  
                    <h1>Golf Course Managment Z<i class="fas fa-golf-ball"></i>ne</h1>
                    {/* <h1>Test Page {username}</h1> */}
                    <DatePicker className="calendar" onChange={onChange} />
                </div>
                <div className="lower_div">
                    <h4> Submit a new Teetime</h4>
                    <form action="">
                        <input className="lower_div_date" type="datetime-local" id="meeting-time" name="meeting-time" value={ttDate} onChange={handleTtDate}/>
                        <input className="lower_div_btn" type="submit" value="Submit" onClick={handleSubmit}></input>
                    </form>
                </div>
            </div>;
}

export default Test;