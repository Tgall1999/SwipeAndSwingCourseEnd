import React from "react";
import "./App.css";
import Navbar from "../Components/Navbar";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Test from "../pages/Test"
import TeeTimes from "../pages/TeeTimes";

class App extends React.Component {
  state = {
    // header
    header_h2__bold: "",
    header_title: "",
    header_info: "",

    // main
    main_title: "Welcome to the Golf Course Management System",
    main_info: ""
  };

  render() {
    const state = this.state;
    return (
      <BrowserRouter>
      <div>
      <Routes>
            <Route path="/" element={<Navbar
                header_h2__bold={state.header_h2__bold}
                header_title={state.header_title}
                header_info={state.header_info}
                main_title={state.main_title}
                main_info={state.main_info}
              />} exact/>
              <Route path="/Test/:username" element={<Test />} />
              <Route path="/TeeTimes/:username/:date" element={<TeeTimes />} />
      </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
