import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import CounterDisplay from './Components/CounterDisplay';
import CountrolButtons from './Components/ControlButtons';

function App() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState('#f4f4f9')

      function increaseCounter () {
        setCounter(counter + 1);
        setBgColor('#85cc87')
      };

      function decreseCounter () {
        if (counter > 0 ){
          setCounter(counter - 1);
          setBgColor("#f44336")
        }
      };

      function resetCounter () {
        setCounter(0);
        setBgColor('#ffffff')
      };

      let zeroMessage = null;
      if (counter === 0){
        zeroMessage= <p className='zero-message'>Counter is at zero</p>
      }

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <CounterDisplay counter={counter} />
      <CountrolButtons
      increaseCounter={increaseCounter}
      decreseCounter={decreseCounter}
      resetCounter={resetCounter}
      counter={counter}/>
      {zeroMessage}
    </div>
  );
}

export default App;
