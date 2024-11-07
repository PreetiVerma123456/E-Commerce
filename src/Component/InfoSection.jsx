import { faHeadset, faLock, faMoneyBill1Wave, faShippingFast, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon   } from '@fortawesome/react-fontawesome'
import React from 'react'

const InfoSection = () => {
    const infoItems = [
        {
            icon : <FontAwesomeIcon icon =  {faShippingFast} className = "text-3xl text-red-600"/>,
            title :"Free Shipping",
            description : "Get your orders delivered with no extra cost."
        },
        {
            icon : <FontAwesomeIcon icon =  {faHeadset} className = "text-3xl text-red-600"/>,
            title :"Support 24/7",
            description : "We are here to assist you anytime."
        },
        {
            icon : <FontAwesomeIcon icon =  {faMoneyBill1Wave} className = "text-3xl text-red-600"/>,
            title :"100% Money Back",
            description : "Full refund if you are not satisfied."
        },
        
        {
            icon : <FontAwesomeIcon icon =  {faTag} className = "text-3xl text-red-600"/>,
            title :"Discount",
            description : "Enjoy the best prices on your products."
        },
        {
            icon : <FontAwesomeIcon icon =  {faLock} className = "text-3xl text-red-600"/>,
            title :"Payment Secure",
            description : "Your payment information is safe with us."
        },
    ]
    
  return (
    <div className='bg-white pb-8 pt-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4' >
{infoItems.map((item,index) => (
    <div key = {index} className='flex flex-col items-center p-4 border rounded-lg shadow-md
    transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
{item.icon}
<h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
<p className='mt-2 text-gray-600'>{item.description}</p>
    </div>
))}
      </div>
    </div>
  )
}

export default InfoSection