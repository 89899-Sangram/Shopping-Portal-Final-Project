import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navigation from './customer/components/Navigation/Navigation'
//import { Navigation } from './customer/components/Navigation/navigation.js';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';


import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import AddressCard from './customer/components/AddressCard/AddressCard';
import OrderSummary from './customer/components/Checkout/OrderSummary';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation/>
        <div>
         {/* <HomePage/> */} 
          {/* <Product/>  */}
           {/* <ProductDetails/>  */}
          {/* <Cart/> 
          <Checkout/> */}
          {/* <AddressCard/> */}
          <OrderSummary/>

          
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
