import { createContext, useState } from 'react';

// create a new context
export const UserContext = createContext();

// crete a context provider component
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('David');

  return (
    <UserContext.Provider value={{ username }}>{children}</UserContext.Provider>
  );
};
