import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./App.css"
const App = () => {
const [todos, setTodos] = useState([])

  const getTodos = async() => {
    let res = await fetch('https://dummyjson.com/todos')
    res = await res.json();
    console.log(res.todos)
    setTodos(res.todos);
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      {
        todos.length > 0 ? (
          <div className='if_parent'>
            {todos.map((todo) => (
              <div className='box' key={todo.id}>
                <h4>Completed: {todo.completed ? "True" : "False"}</h4>
                <div>{todo.todo}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading.....</div>
        )
      }
    </div>
  )
}

export default App
