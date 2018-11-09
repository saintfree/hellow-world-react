import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batmand">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark"heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana"heroName="Wonder Wamen"/>
        <Welcome name="Bruce" heroName="Batmand" />
        <Welcome name="Clark"heroName="Superman" />
        <Welcome name="Diana"heroName="Wonder Wamen" />
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
