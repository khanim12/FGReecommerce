import React from 'react'

function CartBtns({bgColor,text,textColor,onclick}) {
  return (
    <div  >
          <button onClick={onclick}  className={`bg-${bgColor} text-${textColor} cart-btns my-10`}>{ text}</button>
    </div>
  )
}

export default CartBtns
