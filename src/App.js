import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setSteps(1);
    setCount(0);
  }

  function handleMinus() {
    setCount((d) => d - step);
  }
  function handlePlus() {
    setCount((d) => d + step);
  }
  const now = new Date();
  now.setDate(now.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setSteps(+e.target.value)}
        />
        <span> Step: {step} </span>
      </div>
      <div className="padding">
        <button onClick={handleMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handlePlus}>+</button>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{now.toDateString()}</span>
        </p>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
