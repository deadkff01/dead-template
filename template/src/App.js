import React from 'react';
import logo from 'static/logo.svg';
import './App.css';
import GlobalStyles from 'components/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>dead-template</p>
        </header>
      </div>
    </>
  );
}

export default App;
