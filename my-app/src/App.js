import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Vishnu
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
        <ButtonGroup variant="contained"
        color="error"
        aria-label="outlined primary button group">
          <Button>Login</Button>
          <Button>Signup</Button>
          <Button>Help</Button>
        </ButtonGroup>
        

        <Button variant="contained"
         href="https://www.amazon.com/ref=nav_logo"
         target="_blank"
         rel="noopener noreferrer"
        color="success">


        Amazon</Button>
       
       
        <Button variant="outlined"
         href="https://www.mcdonalds.com/us/en-us.html"
         target="_blank"
         rel="noopener noreferrer"
        >Mcdonalds</Button>




        <Button variant="contained"
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        >Youtube</Button>
      </header>
    </div>
  );
}

export default App;
