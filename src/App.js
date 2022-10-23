import { Component } from "react";

import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contacts" element={<Contacts />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}
