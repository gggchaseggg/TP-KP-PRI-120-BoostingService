import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const func = () => {
        fetch("api/test").then(response => response.json()).then(data => console.log(data));
    }

    return (
        <div className="App">
            <button onClick={func}>gdjfghdkjfhgdkjfhgkdjg</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> //cghjklô
    </div>
  );
}

export default App;
