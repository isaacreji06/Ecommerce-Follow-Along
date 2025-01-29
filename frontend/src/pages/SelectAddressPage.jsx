import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddressList from '../components/AllAddress/address'
function SelectAddressPage() {
    const [AllAddresses,setAllAddresses]=useState([])
    useEffect(()=>{
        const fetchAddress=async()=>{
            const token=localStorage.getItem('token')
            if(!token){
                alert('token missing please login again')
            }
            const response =await axios.get(`http://localhost:8080/user/get-adresses?token=${token}`)
            setAllAddresses(response.data.userInfo)
        }
    },[])
  return (
    <div>
        <AddressList addresses={AllAddresses}/>
    </div>
  )
}

export default SelectAddressPage