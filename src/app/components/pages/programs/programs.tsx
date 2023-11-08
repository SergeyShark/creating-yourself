import React, { useEffect, useState } from "react";
import axios from "axios";
const Programs = () => {
  interface User {
    id: number;
    name: string;
    userName: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    setUsers(response.data);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default Programs;
