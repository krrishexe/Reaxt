import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

class App extends Component {

  pageSize =10;
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>

            <Route exact path="/business" key="business" element={<News pageSize={this.pageSize} country={"In"} category={"business"} />} />
            <Route exact path="/sports" key="sports" element={<News pageSize={this.pageSize} country={"In"} category={"sports"} />} />
            <Route exact path="/entertainment" key="entertainment" element={<News pageSize={this.pageSize} country={"In"} category={"entertainment"} />} />
            <Route exact path="/health" key="health" element={<News pageSize={this.pageSize} country={"In"} category={"health"} />} />
            <Route exact path="/science" key="science" element={<News pageSize={this.pageSize} country={"In"} category={"science"} />} />
            <Route exact path="/technology" key="technology" element={<News pageSize={this.pageSize} country={"In"} category={"technology"} />} />
            <Route exact path="/" key="general" element={<News pageSize={this.pageSize} country={"In"} category={"general"} />} />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;




