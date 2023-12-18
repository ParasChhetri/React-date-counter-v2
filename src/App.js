import { useState } from 'react';
import './index.scss';
import { FaAngleDoubleDown } from "react-icons/fa";

function App() {
  const [close, setclose] = useState(true);
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count)
  const resetButton = () => {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="App">
      { close &&
        <div className='nav-bar'>
          <nav>
            <p>date counter</p>
          </nav>
        </div>
      }
      <div>
        <button type='button' className='close-btn' onClick={() => setclose((closeButton) => !closeButton)}><FaAngleDoubleDown /></button>
      </div>
      <div className="main-container">
        <div className='date-container'>
          <div className="steps-container">
            <input type="range" min="1" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
            <span>step {step}</span>
          </div>
          <div className="count-container">
            <button type='button' className='btn' onClick={() => setCount((c) => c - step)}>&#8722;</button>
            <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))}/>
            <button type='button' className='btn' onClick={() => setCount((c) => c + step)}>&#43;</button>
          </div>
          <div className="my-date">
          {
            count === 0 ? "Today" : count > 0 ? `${count} Day from today` : `${Math.abs(count)} Day ago was`} : {date.toDateString()}
          </div>

          {/* THIS RESET BUTTON WILL ONLY APPEAR WHEN WE HAVE SOME VALUES OR ELSE IT WONT */}
          {
            (count !== 0 || step !== 1) ? 
            <div className="reset-container">
              <button type='button' className='reset-btn' onClick={resetButton}>reset</button>
            </div> : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;