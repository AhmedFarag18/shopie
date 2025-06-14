import React from 'react'
import { Link } from 'react-router'
import { mainIcon } from '../assets/icons'

function Checkout() {
  return (
    <div className="py-26 text-center text-lg text-gray-700 flex gap-3 flex-col items-center">
      <h1 className="text-2xl font-bold text-fuchsia-800 mb-4 flex gap-3 items-center">
        <img src={mainIcon} alt="Image " className='w-12' />
        Order Confirmed!</h1>
      <p className="mb-6">Your order has been successfully placed. Thank you for shopping with us!</p>

      <Link
        to="/"
        className="btn-primary m-auto"
      >
        Go to Home
      </Link>
    </div>
  )
}

export default Checkout
