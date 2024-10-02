import React from 'react'
import CartLeft from './CartLeft'
import CartRight from './CartRight'
import "../CheckCart/CheckCart.css"
function CheckCart() {
  return (
    <div>
      <h1 className='text-red-600 my-8'>Check Out</h1>
      <div className='flex gap-5 h-screen'>
      <CartLeft  />
          <CartRight/>

      </div>
    </div>
  )
}

export default CheckCart
