import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Index from "./components/Index";
import Container from "./components/Container";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";



class App extends Component {
  render() {
    return (
      

      <div className="wrapper">
        <Index />
        <div id="cont1">
          <Container player="2YL20Y0UP"/>
        </div>

         <div id="cont2">
           <Container1 />
         </div>

        <div id="cont3">
          <Container2 />
        </div>

        <div id="cont4">
          <Container3 />
        </div>
      </div>
      
    );
  }
}

export default App;
