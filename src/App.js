import React, { useState } from 'react';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeatButton from './components/TextRepeatButton';
import './App.css';

function App() {
  const [light, setLight] = useState("off");

  const switchLight = () => setLight(light === "off" ? "on" : "off");
  const dark = (light === 'off') ? 'dark' : '';

  return ( 
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton/>
        <CounterButton/>
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeatButton/>
      </section>
    </div>
  );
}

export default App;
