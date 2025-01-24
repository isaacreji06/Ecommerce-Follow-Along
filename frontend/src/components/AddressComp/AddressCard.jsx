import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressCard = () => {
    const[city,setCity]=useState('')
    const[country,setCountry]=useState('')
    const[add1,setAdd1]=useState('')
    const[add2,setAdd2]=useState('')
    const[zipCode,setZipcode]=useState('')
    const [addressType,setAddressType]=useState('')
    const navigate=useNavigate
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const addressData={
            city,
            country,
            address1:add1,
            address2:add2,
            zipCode,
            addressType
        }
        console.log(addressData)
        const token=localStorage.getItem('token')
        if(!token){
            return alert('token missing')
        }
        const response= await axios.post(`http://localhost:8080/user/add-address?token=${token}`,
            addressData
        )
        navigate('/profile')
    }
  return (
    <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Address Details</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter your city"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Enter your country"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address1">
          Address Line 1
        </label>
        <input
          type="text"
          id="address1"
          name="address1"
          placeholder="Enter address line 1"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address2">
          Address Line 2
        </label>
        <input
          type="text"
          id="address2"
          name="address2"
          placeholder="Enter address line 2 (optional)"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
          ZIP Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          placeholder="Enter ZIP Code"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressType">
          Address Type
        </label>
        <select
          id="addressType"
          name="addressType"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Address Type</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        onSubmit={handleSubmit}
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default AddressCard;
