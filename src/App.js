import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <SideBar />
          <Container />
        </div>
      </div>
    );
  }
}

export default App;
