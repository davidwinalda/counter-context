import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const User = () => {
  const { username } = useContext(UserContext);
  return <h1>{username}</h1>;
};

export default User;
