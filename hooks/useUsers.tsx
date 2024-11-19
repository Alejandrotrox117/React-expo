// src/hooks/useUsers.js
import { useState } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, id: Date.now().toString() }]);
  };

  return { users, addUser };
};

export default useUsers;
