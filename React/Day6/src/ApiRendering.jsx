import React, { useState } from 'react';

function ApiRendering() {
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(info => setData(info));

  return (
    <div>
      
        {/* <ul>
          {data.map(user => (
            <li key={user.id}>
              {user.name}
              {user.email}
            </li>
            
            
          ))}
        </ul> */}

        <table>
            <tr><th>name</th><th>email</th></tr>
            {data.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
            
            

        </table>
     
      
      
    </div>
  );
}

export default ApiRendering;
