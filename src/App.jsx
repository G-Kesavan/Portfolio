import React from 'react';
import './App.css';
import Main from './Components/Main/Main.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
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
