import React from 'react';
import logo from './logo.svg';
import './App.css';

const Title = ({text}) => <div>{text}</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <ul className="tyler">
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
        <li>Test 3</li>
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Title text="Some title" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
