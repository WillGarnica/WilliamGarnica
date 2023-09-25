import React from 'react';

import './App.css';
import Header from './components/commons/header/Header';
import Home from './components/home/Home';
import MyKnowledge from './components/myKnowledge/MyKnowledge';

const App: React.FC = () => {
  return (
    <div >

      <Header />
      <Home />
      <MyKnowledge />

    </div >
  );
};

export default App;
