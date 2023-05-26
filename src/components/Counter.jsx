import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
