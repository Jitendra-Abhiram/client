import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
class App extends Component {
  render() {
    return (

      <div className="App">
        {/* <Navbar /> */}
        <Router>
          <Routes>
            <Route  path="/" element={<><Navbar/><Landing/> </>} />
            <Route  path="/register" element={<Register/>} />
            <Route  path="/login" element={<Login/>} />
          </Routes>
        </Router>
      </div>

    );
  }
}
export default App;