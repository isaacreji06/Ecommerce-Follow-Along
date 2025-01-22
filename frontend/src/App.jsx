// eslint-disable-next-line no-unused-vars
import React from 'react'
import LoginPage from "./components/auth/loginPage"
import SignupForm from "./components/auth/signupPage"
import { Routes,Route } from 'react-router-dom'
import ProductEntryPage from './pages/productEntryPage'
import Updateform from './pages/updateform'
import HomePage from './pages/homePage'
import Navbar from './components/Navbar/Navbar'
import SingleProductPage from './pages/singleProductPage'
import CartPage from './pages/CartPage'
import Profile from './pages/Profile'

function App(){
  return( 
  <div>
      <Navbar />
      {/* <LoginPage /> */}
      {/* <SignupForm /> */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignupForm />}/>
        <Route path="/product-entry-page" element={<ProductEntryPage />}/>
        <Route path="/update-form/:id" element={<Updateform />} />
        <Route path="/product-details/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  </div>
  )
}
export default App