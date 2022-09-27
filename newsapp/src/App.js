import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize = {7} country = {"In"} category={"science"}/>
      </div>
    );
  }
}

export default App;
