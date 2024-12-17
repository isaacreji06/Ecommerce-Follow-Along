import React from 'react'
import LoginPage from "./components/auth/loginPage"
import SignupForm from "./components/auth/signupPage"
import { Routes,Route } from 'react-router-dom'
function App(){
  return( 
  <div>
  {/* <LoginPage /> */}
  {/* <SignupForm /> */}
  <Routes>
    <Route path="/" element={<h1>Homepage</h1>} />
    <Route path="/loginPage" element={<LoginPage />} />
    <Route path="/signupPage" element={<SignupForm />}/>
  </Routes>
  </div>
  )
}
export default App