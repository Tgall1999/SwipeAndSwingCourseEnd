import React, {useState} from 'react';
import "./TeeTime.css";
import Modal from 'react-modal';
import axios from 'axios';



class TeeTime extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        modalIsOpen: false,
        teetimeID: this.props.teetime.TEETIME_ID,
        teetimeTime: this.props.teetime.TT_TIME,
        golfer1: this.props.teetime.GOLFER1_ID,
        golfer2: this.props.teetime.GOLFER2_ID,
        golfer3: this.props.teetime.GOLFER3_ID,
        golfer4: this.props.teetime.GOLFER4_ID
    }
  }

    openModal = () => {
      console.log("heyy");
      console.log(this.state.golfer1)
      console.log(this.props.teetime.time);
      this.setState({modalIsOpen: true});
    }
  
     afterOpenModal = () =>{
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
    }
  
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    setGolfer1 = (event) => {
        console.log(event.target.value);
        this.setState({golfer1: event.target.value});
    }

    setGolfer2 = (event) => {
        console.log(event.target.value);
        this.setState({golfer2: event.target.value});
    }

    setGolfer3 = (event) => {
        console.log(event.target.value);
        this.setState({golfer3: event.target.value});
    }

    setGolfer4 = (event) => {
        console.log(event.target.value);
        this.setState({golfer4: event.target.value});
    }

    handleSubmit= () => {
        if(document.getElementById('delete_checkbox').checked){
            console.log("checked: TTID");
            console.log(this.state.teetimeID)

            const form = new FormData();
            form.append('teetime_id', this.state.teetimeID);


            console.log("sending");
            const response = axios.post('http://100.24.89.174:5000/teetime/deleteTeetime', form, {
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
                this.setState({
                                golfer1: "Deleted",
                                golfer2: "Deleted",
                                golfer3: "Deleted",
                                golfer4: "Deleted"
                              });

        }
        console.log(document.getElementById('delete_checkbox'));
        console.log(this.state.golfer1);
        console.log(this.state.golfer2);
        console.log(this.state.golfer3);
        console.log(this.state.golfer4);
        this.setState({modalIsOpen: false});
    }


  render() {
      console.log("Props");
      console.log(this.props);
      console.log(this.state.teetimeID);

      if(this.state.golfer1===null){
        this.setState({golfer1: "None"});
      }
      if(this.state.golfer2===null){
        this.setState({golfer2: "None"});
      }
      if(this.state.golfer3===null){
        this.setState({golfer3: "None"});
      }
      if(this.state.golfer4===null){
        this.setState({golfer4: "None"});
      }

      console.log("ellll");
      console.log(this.state.teetimeID);
      console.log(this.state.golfer1);

      if(this.state.golfer1 == 'Deleted'){
        return <div></div>;
      }

      return (
      <div className="TeeTime_div">
        <Modal 
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.state.closeModal}>
         <h1>Edit Teetime</h1> 
         <form action="">
            <div className="modal_form">
              <p className="modal_form_inline">Golfer 1:</p>
              <input className="modal_form_inline" type="text" id="meeting-time" name="meeting-time" value={this.state.golfer1} onChange={this.setGolfer1}/>
            </div>
            <div className="modal_form">
              <p className="modal_form_inline">Golfer 2:</p>
              <input className="modal_form_inline" type="text" id="meeting-time" name="meeting-time" value={this.state.golfer2} onChange={this.setGolfer2}/>
            </div>
            <div className="modal_form">
              <p className="modal_form_inline">Golfer 3:</p>
              <input className="modal_form_inline" type="text" id="meeting-time" name="meeting-time" value={this.state.golfer3} onChange={this.setGolfer3}/>
            </div>
            <div className="modal_form">
              <p className="modal_form_inline">Golfer 4:</p>
              <input className="modal_form_inline" type="text" id="meeting-time" name="meeting-time" value={this.state.golfer4} onChange={this.setGolfer4}/>
            </div>
            <div className="modal_form"><input className="modal_form_inline" id="delete_checkbox" type="checkbox"></input><p className="modal_form_inline">Delete TeeTime</p></div>
            <input className="btn btn-success modal-btn" type="" value="Submit with changes" onClick={this.handleSubmit}></input>
        </form>
         <button className="btn btn-success modal-btn" onClick={this.closeModal}>Close without making changes</button>
      </Modal>

        <p>Time: {this.state.teetimeTime}</p>
        <p>Golfer 1: {this.state.golfer1}</p>
        <p>Golfer 2: {this.state.golfer2}</p>
        <p>Golfer 3: {this.state.golfer3}</p>
        <p>Golfer 4: {this.state.golfer4}</p>
        <button className="btn btn-success" onClick={this.openModal}>Edit</button>
      </div>
      )
  }
} 

export default TeeTime;