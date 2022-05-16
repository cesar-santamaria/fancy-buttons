import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeatButton from './components/TextRepeatButton';
import './App.css';

function App() {
  return ( 
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton/>
        <CounterButton/>
        <LightSwitchButton/>
        <TextRepeatButton/>
      </section>
    </div>
  );
}

export default App;
