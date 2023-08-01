import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <p>Hi. I'm <h2>William Garnica</h2></p>

      <p><h1>Backend developer!</h1></p>

      <Button variant="contained"
        style={{ textTransform: 'none' }}
        target="blank"
        href="https://www.linkedin.com/in/william-garnica-70b93a196">
        My Linkedin
      </Button>


    </header>
  </div >
);

export default App;
