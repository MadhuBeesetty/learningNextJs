import React from 'react'

interface User {
  id: number;
  name: string;

}

const UserPage = async () => {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
   { cache: 'no-store'},
);
  const users: User[] = await res.json();

  return (
    <div>
      <h1>users</h1>
      <ul>
      {
        users.map(eachUser => (
          <li key={eachUser.id}>
            {eachUser.name}
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default UserPage;
