import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    let res = await fetch('https://dummyjson.com/users');
    res = await res.json();
    console.log(res.users);
    setUsers(res.users);
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      {
        users?.length > 0 ? (
          <div className='if_parent'>
            {
              users.map((user) => {
                return (
                  <div className='box' key={user.id}>
                    <img src={user.image} />
                    <h1>{user.firstName} {user.lastName}</h1>
                    <p>{user.phone}</p>
                  </div>
                )
              })
            }
          </div>
        ) : (
          <div>Loading...</div>
        )
      }
    </div>
  )
}

export default App
