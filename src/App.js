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

  function handleMinus() {
    setCount((d) => d - step);
  }

  function handlePlus() {
    setCount((d) => d + step);
  }

  function handleStepsMinus() {
    setSteps((s) => s - 1);
  }
  function handleStepsPlus() {
    setSteps((s) => s + 1);
  }
  const now = new Date();
  now.setDate(now.getDate() + count);

  return (
    <>
      <div>
        <button onClick={handleStepsMinus}>-</button>
        <span> Step: {step} </span>
        <button onClick={handleStepsPlus}>+</button>
      </div>
      <div className="padding">
        <button onClick={handleMinus}>-</button>
        <span> Count: {count} </span>
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
    </>
  );
}
