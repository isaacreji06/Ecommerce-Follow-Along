/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import CartCard from '../components/ProductCard/CartCard'
import axios from 'axios'

function CartPage() {
    useEffect(()=>{
    const getCartData=async()=>{
        const [usersCartData,setUsersCartData]=useState([])
        
            const token=localStorage.getItem('token')
            if (!token){
                return alert('token is missing please login')
            }
            const response=await axios.get(`http://localhost:8080/cart/get-user-cart-data?token=${token}`)
            setUsersCartData(response.data.cartData)
        }
        getCartData()
    },[])
        return (
        <div>
            {usersCartData?.map({singleCartObject,index}=>{
                return {
                    <CartCard
                    title={singleCartObject.productId.title},
                    images={
                        singleCartObject.productId.images[0]
                        ?singleCartObject.productId.images[0]:'product image missing'
                    },index={index},
                    description={singleCartObject.productId.description},
                    originalPrice={singleCartObject.productId.originalPrice},
                    discountedPrice={singleCartObject.productId.discountedPrice},
                    rating={singleCartObject.productId.rating},
                    id={singleCartObject.productId._id} />
                    createdBy={singleCartObject.productId.userId}
                }
            })}
        </div>
    )
}

export default CartPage