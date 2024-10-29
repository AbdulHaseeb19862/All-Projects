import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCounter,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncreementClick = () => {
    dispatch(increment());
  };
  const handleDecreementClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(resetCounter());
  };

  const handleAmountClick = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <>
      <div className="container">
        <button onClick={handleIncreementClick}>+</button>
        <p>Counter {count}</p>
        <button onClick={handleDecreementClick}>-</button>
        <br />
        <br />
        <button onClick={handleResetClick}>Reset</button>
        <br />
        <br />
        <input
          type="number"
          value={amount}
          placeholder="Enter Value Here"
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleAmountClick}>Inc By Amount</button>
      </div>
    </>
  );
}

export default App;
