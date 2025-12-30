import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./App.css"
const App = () => {
  const [posts, setPost] = useState([])
  const getPosts = async () => {
    let res = await fetch('https://dummyjson.com/posts')
    res = await res.json();
    console.log(res.posts)
    setPost(res.posts)
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div>
      {
        posts?.length > 0 ? (
          <div className='if_parent'>
            {
              posts.map((post) => {
                return (
                  <div className='box' key={post.id}>
                    <h1>{post.title}</h1>
                    <p>Likes: {post.reactions.likes}</p>
                    <p>Dilikes: {post.reactions.dislikes}</p>
                  </div>
                )
              })
            }
          </div>
        ) : (
          <div>Loading</div>
        )
      }
    </div>
  )
}

export default App
