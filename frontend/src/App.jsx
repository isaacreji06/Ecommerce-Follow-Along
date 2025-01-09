// eslint-disable-next-line no-unused-vars
import React from 'react'
import LoginPage from "./components/auth/loginPage"
import SignupForm from "./components/auth/signupPage"
import { Routes,Route } from 'react-router-dom'
import ProductEntryPage from './pages/productEntryPage'
import Updateform from './pages/updateform'
import HomePage from './pages/homePage'
function App(){
  return( 
  <div>
  {/* <LoginPage /> */}
  {/* <SignupForm /> */}
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/loginPage" element={<LoginPage />} />
    <Route path="/signupPage" element={<SignupForm />}/>
    <Route path="/product-entry-page" element={<ProductEntryPage />}/>
    <Route path="/update-form/:id" element={<Updateform />} />
  </Routes>
  </div>
  )
}
export default App