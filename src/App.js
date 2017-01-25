import React from 'react';
import './styles.css';
import Header from './components/header';

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
