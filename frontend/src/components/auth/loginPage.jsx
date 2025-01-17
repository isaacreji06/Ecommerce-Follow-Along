import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import logo from '../../assets/logo.webp';
import axios from "axios"

function LoginPage() {
  const navigate = useNavigate();

  const handleClickLogin=async()=>{
    const res=await axios.post('http://localhost:8080/user/login');
    localStorage.setItem('token',res.data.token)
    console.log(res)
    navigate('/')
  }
  return(
  <div className="h-screen flex items-center justify-center">
    
    <form onSubmit={handleClickLogin} className="space-y-6">
        <div><img className="mx-auto h-10 w-auto" src="../../assets/logo.webp" alt="Logo" /></div>
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        <div>
        <label htmlFor="" className="block text-sm/6 font-medium text-gray-900">Please enter your email</label>
        <input type="text" placeholder='abc@example.com' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
        </div>
        <div>
            <label htmlFor="" className="block text-sm/6 font-medium text-gray-900">enter your password</label>
            <input type="password" placeholder='*******' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
        <button type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
                <p className='text-center'> Dont have an account?signup <Link to={"./signupPage"} /></p>
    </form>
  </div>
  )
  
}

export default LoginPage