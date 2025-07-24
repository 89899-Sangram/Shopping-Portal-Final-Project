import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navigation from './customer/components/Navigation/Navigation'
//import { Navigation } from './customer/components/Navigation/navigation.js';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';


import HomePage from './customer/pages/homePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from './customer/pages/auth/Login';
import Register from './customer/pages/auth/Register';

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  return (
    <>
      <div>
        <Navigation/>
        <div>
          {/* <HomePage/> */}
          {/* <Product/> */}
       
      <Routes>
        {/* <Route 
            path='/' 
            element={<Product />}
        />
        <Route 
            path='/login' 
            element={<Login />}
        />
        <Route
            path='/register'
            element={<Register />}
        /> */}
         <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<Product />} />
            {/* Optional: Add a Home route if needed */}
            <Route path="/" element={<HomePage />} />
      </Routes>
       </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
