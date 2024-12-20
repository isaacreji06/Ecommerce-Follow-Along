import React from 'react'
import LoginPage from "./components/auth/loginPage"
import SignupForm from "./components/auth/signupPage"
import { Routes,Route } from 'react-router-dom'
import ProductEntryPage from '../pages/productEntryPage'
function App(){
  return( 
  <div>
  {/* <LoginPage /> */}
  {/* <SignupForm /> */}
  <Routes>
    <Route path="/" element={<homePage />} />
    <Route path="/loginPage" element={<LoginPage />} />
    <Route path="/signupPage" element={<SignupForm />}/>
    <Route path="/product-entry-page" element={<ProductEntryPage />}/>
  </Routes>
  </div>
  )
}
export default App