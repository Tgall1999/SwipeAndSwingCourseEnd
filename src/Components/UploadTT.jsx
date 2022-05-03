import React, {useState,useEffect} from 'react'

const boxStyle = {
  width: "800px",
  height: "700px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  position:"absolute",
  color:"#262626",
  top: 0,
  left: 0,
  lineHeight:"80px",
  borderRadius:"10px",
  padding:"40px"
}

const newStyle = {
    background:"rgb(245,245,245)",
  }


const UploadTT = (props) => {

    const [ttDate, setttDate] = useState('');

    useEffect(() => {
        // send get request to server
        //setFirstName('First Name');

    }, []);

    //function handleFirstName(event) {
    //    setFirstName(event.target.value);
    //}

    function handleTtDate(event) {
        setttDate(event.target.value);
        console.log(event.target.value);
    }

    function handleSubmit(event) {
        console.log(ttDate);
        event.preventDefault();
    }
  return(
    <div style={newStyle}>
      <div>
      <h2>WELCOMMMME {props.uName}</h2>

        <form action="">
        <input type="datetime-local" id="meeting-time" name="meeting-time" value={ttDate} onChange={handleTtDate}/><br/><br/>
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
        </form>
      </div>
    </div>
  )
}

export default UploadTT;