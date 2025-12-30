import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [product, setProduct] = useState([])
  const getProduct = async () => {
    let res = await fetch('https://dummyjson.com/products')
    res = await res.json();
    console.log(res.products);
    setProduct(res.products)

  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div>
      {
        product?.length > 0 ? (
          <div className='if_parent'>
            {
              product.map((product) => {
                return (
                  <div key={product.id} className='box'>
                    <img src={product.thumbnail} />
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                  </div>
                )
              })
            }
          </div>
        ) : (
          <div className='else'>Loading.....</div>
        )
      }
    </div>
  )
}

export default App
