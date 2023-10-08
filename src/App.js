import { useState } from 'react';
import './index.css';

function App() {

  const [animation, setAnimationValue] = useState("breath 2000ms infinite linear alternate-reverse")

  let styles ={
    animation: animation
  }

  return (
    <div className="App">
      <h3>BREATH</h3>
      <div className="breath" style={styles}></div>

      <div className="time">
        <h3 onClick={() => {setAnimationValue("breath 4000ms infinite linear alternate-reverse")}}>4</h3>
        <h3 onClick={() => {setAnimationValue("breath 6000ms infinite linear alternate-reverse")}}>6</h3>
        <h3 onClick={() => {setAnimationValue("breath 8000ms infinite linear alternate-reverse")}}>8</h3>
      </div>

    </div>
  );
}

export default App;
