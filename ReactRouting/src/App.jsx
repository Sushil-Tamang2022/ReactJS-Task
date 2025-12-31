import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import PageNotFound from "./pages/PageNotFound"
import Footer from "./components/Footer"
import Register from "./pages/Register"


const App = () => {
  return (
    <div>
    <Header />
      {/* make path/route */}
      <div style={{ minHeight: "700px" }}>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
