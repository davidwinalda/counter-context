import { CounterProvider } from './context/CounterContext';
import { UserProvider } from './context/UserContext';
import Counter from './components/Counter';
import User from './components/User';
import './App.css';

function App() {
  return (
    <>
      <UserProvider>
        <User />
      </UserProvider>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  );
}

export default App;
