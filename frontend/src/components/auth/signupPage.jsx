import React, { useState } from 'react';
import validationFormObject from '../../validation.js';
import { Link } from 'react-router-dom';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    file: '',
  });
const[err,setError]=useState("")
  const handleChange = (e) => {
    const{name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value,
    })
    console.log(formData)
  };



  const handleSubmit = (e) => {
    e.preventDefault()
    const NameV=validationFormObject.validateName(formData.name)
    const EmailV= validationFormObject.validateEmail(formData.email)
    const PassV=validationFormObject.validatePass(formData.password)
    if (typeof NameV=="string" && NameV.length>1){
        return setError(NameV)
    }
    if (typeof EmailV=="string" && EmailV.length>2){
        return setError(EmailV)
    }
    if (typeof PassV=="string" && PassV.length>2){
        return setError(PassV)
    }
    setError("")
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-700 font-medium mb-2">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept='.jp, .jpeg, .png'
            // onChange={handleFileChange}
            className="w-full text-gray-700"
            required
          />
        </div>
        <p className='text-red'>{err}</p>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign Up
        </button>
        <p className='text-center'>Already have an account?login <Link to={"./loginPage"} /></p>
      </form>
    </div>
  );
};

export default SignupForm;