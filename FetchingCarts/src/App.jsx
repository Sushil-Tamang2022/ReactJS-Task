import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [carts, setCarts] = useState([])
  const getCarts = async () => {
    let res = await fetch('https://dummyjson.com/carts')
    res = await res.json();
    console.log(res.carts.title);
    setCarts(res.carts.products);
  }

  useEffect(() => {
    getCarts()
  }, [])

  return (
    <div>
      {
        carts?.length > 0 ? (
          <div className='if_parent'>
            {
              carts.map((cart) => {
                return (
                  <div className='box' key={cart.id}>
                    {cart.products.map((product) => (
                      <div>
                        <img src={product.thumbnail}/>
                        <div>{product.title}</div>
                        <div>{product.price}</div>
                      </div>
                    ))}
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
