import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [value, setvalue] = useState('home')
  const SetValue =(v)=>{
    setvalue(v)
  }
  return (
    <div className="app">
      <Header/>
      <Main
      value={value}
      SetValue={SetValue}
      />
      <Footer/>
    </div>
  );
}

export default App;
