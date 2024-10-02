import React from "react";
import CartBtns from "./CartBtns";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/MyCartProvider";
import MyCartItems from "./MyCartItems";

function MyCartComp() {
  const navigate = useNavigate();
  const { cartItems,cancelItem } = useCart();
  const handleProceed = () => {
    navigate("/checkCart");
  };
  console.log(cartItems);
  return (
    <div className="w-11/12 m-auto">
      <h3 className="text-red-500 my-8"> My Cart</h3>
    <MyCartItems/>
      <div className="flex gap-3 justify-end">
        <CartBtns
          text="CONTINUE SHOPPING"
          bgColor="red-600"
          textColor="white"
        />
        <CartBtns text="PRINT ORDER" bgColor="[#d9d9d9]" />
        <CartBtns onclick={cancelItem} text="CANCEL ORDER" bgColor="[#d9d9d9]" />
        <CartBtns text="SAVE CHANGES" bgColor="[#d9d9d9]" />
        <CartBtns
          onclick={handleProceed}
          text="PROCEED TO CHECKOUT"
          bgColor="red-600"
          textColor="white"
        />
      </div>
    </div>
  );
}

export default MyCartComp;
