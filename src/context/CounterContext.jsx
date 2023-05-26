import { createContext, useState } from 'react';

// create a new context
export const CounterContext = createContext();

// crete a context provider component
// eslint-disable-next-line react/prop-types
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
