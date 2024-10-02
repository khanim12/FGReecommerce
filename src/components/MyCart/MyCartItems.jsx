import React from 'react'
import { useCart } from '../../Context/MyCartProvider';

function MyCartItems() {
  const { cartItems, RemoveItem } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
        <div className="grid grid-rows-3 items-center my-4 ">
        <div className="grid grid-cols-10 font-extrabold flex bg-[#fff6f6]  py-4 px-5  ">
          <h3 className="col-span-2">Ref#</h3>
          <h3 className="col-span-3">Name</h3>
          <h3>QTY</h3>
          <h3>PK</h3>
          <h3>Price</h3>
          <h3 className="col-span-2">Ext Price</h3>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="grid grid-cols-10 items-center" key={index}>
              <div className="flex gap-4 items-center col-span-2 ">
                <img style={{ width: "80px" }} src={item.img} alt={item.name} />
                <span className="text-sm text-red-600">{item.id}</span>
              </div>
              <h3 className="text-base col-span-3">{item.name.slice(0, 30)}</h3>
              <p>{item.quantity}</p>
              <p>ea</p>
              <p>{item.price}</p>
              <div className="flex gap-10">
                <p>$38,90</p>
                <span onClick={()=>RemoveItem(item.id)} className="text-red-600 cursor-pointer ">remove</span>
              </div>
            </div>
          ))
        ) : (
          <p>No items in cart.</p>
        )}
        <div className="flex bg-[#fff6f6] justify-end  py-4 px-5">
          <span>Total</span>
          <h3> ${ totalPrice.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}

export default MyCartItems
