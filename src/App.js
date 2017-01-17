import React from 'react';
import './App.css';
import Header from './components/Header';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default App;
