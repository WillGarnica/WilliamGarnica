import React from 'react';

import './App.css';
import Header from './components/commons/header/Header';
import Home from './components/home/Home';
import MyKnowledge from './components/myKnowledge/MyKnowledge';

const App: React.FC = () => {
  return (
    <div className="App App-header">
      <Header />

      <section id="home" >
        <Home />
      </section>

      <section id="my-knowledge" >
        <MyKnowledge />
      </section>

    </div >
  );
};

export default App;
