import './App.css';
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Textform from './Components/Textform';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [buttonText, setButtonText] = useState("Dark Mode");
  let togglemodeDark = () => {
    if (mode === 'light') {
      setMode('secondary');
      document.body.style.backgroundColor = '#C996CC'
      document.title = "V1nlands - purple mode enabled"
      setButtonText("Enable Light Mode");

      // message chamkane vala code 

      // setInterval(() => {
      //   document.title ="(12 New Messages)"
      // }, 2000);
      // setInterval(() => {
      //   document.title ="V1nlands - purple mode enabled"
      // },1500);



    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      setButtonText("Enable Dark Mode");
    }
  }

  const [contrastMode, setContrastMode] = useState('light');
  let togglemodeContrast = () => {
    if (contrastMode === 'light') {
      setContrastMode('dark');
      document.body.style.backgroundColor = '#180A0A'
      document.body.style.color = 'white'
      document.title = "V1nlands - Hign Contrast mode enabled"
      setButtonText("Enable Light Mode");
    }
    else {
      setContrastMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setButtonText("Enable Light Mode");
    }
  }

  const [joymode, setJoyMode] = useState('light');
  let togglemodeJoy = () => {
    if (joymode === 'light') {
      setJoyMode('dark');
      document.body.style.backgroundColor = '#E63E6D'
      document.title = "V1nlands - Pink mode enabled"
      setButtonText("Enable Light Mode");
    }
    else {
      setJoyMode('light');
      document.body.style.backgroundColor = 'white';
      setButtonText("Enable Light Mode");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="V1nlands" mode={mode} togglemodeDark={togglemodeDark} buttonText={buttonText} togglemodeContrast={togglemodeContrast} togglemodeJoy={togglemodeJoy} />
        <div className='container'>
        <Hero />

          {/* <Routes>
            <Route exact path="/" element={<Hero />}/> */}
          {/* </Routes>
          <Routes>
            <Route exact path="/Link" element={<Textform />} />
          </Routes> */}

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;