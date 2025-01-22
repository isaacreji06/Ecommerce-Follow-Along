import { X } from 'lucide-react'
import React from 'react'
import Link from 'react-router-dom'

function CartCard( title,
    {images,
    index,
    description,
    originalPrice,
    discountedPrice,
    rating,
    id,
createdBy}) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-4">
     <div className="flex gap-6">
       {/* Product Image */}
       <div className="relative w-64">
        
         <img
           src={images.length > 0 ? images[0] : `/api/placeholder/256/320`}
           alt="Product Image"
           className="rounded-lg object-cover"
         />
       </div>


       {/* Product Details */}
       <div className="flex-1">
         <div className="flex justify-between items-start">
           <div>
             <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
             <p className="text-lg text-gray-600">{description}</p>
             <p className="text-gray-500 mt-1">Sold by: {createdBy}</p>
           </div>
           <button className="text-gray-500 hover:text-gray-700">
             <X className="w-6 h-6" />
           </button>
         </div>
         </div>
         </div>
         </div>

  )
}

export default CartCard