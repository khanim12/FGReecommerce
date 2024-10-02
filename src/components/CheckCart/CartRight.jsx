import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartRight() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    cardHolderName: "Mark Lorem",
    cardNumber: "",
    paymentMethod: "",
    expiryMonth: "January",
    expiryYear: "2024",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h1 className="text-xl font-extrabold bg-[#fff6f6] p-2 mb-8">
        Payment Form
      </h1>
      <p>
        If paying by credit card, please enter the information below, otherwise
        press Proceed.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <label>Card Holder's Name</label>
          <input
            className="basis-3/4"
            type="text"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <label>Card Number</label>
          <input
            className="basis-3/4"
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter Card Number"
          />
        </div>

        <div className="flex items-center justify-between">
          <label>Payment Method</label>
          <select
            className="basis-3/4"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label>Expiry Date</label>
          <div className="flex basis-3/4 gap-3">
            <select
              className=""
              name="expiryMonth"
              value={formData.expiryMonth}
              onChange={handleChange}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">              <option value="November">January</option>
              </option>
              <option value="December">December</option>
            </select>
            <select
              className=""
              name="expiryYear"
              value={formData.expiryYear}
              onChange={handleChange}
            >
              <option value="2024">2022</option>

              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2024">2025</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label>CVV Number</label>
          <input
            className="basis-3/4"
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="Enter CVV"
          />
        </div>
      </div>
      <div className="buttons flex gap-3 justify-end mt-12">
      <button onClick={()=>navigate("/mycart")} className="bg-[#d9d9d9] px-3 py-2   p-2 rounded">
      Back to cart
        </button>
        <button onClick={()=>navigate("/order")} className="bg-red-600 text-white px-8 py-2   p-2 rounded">
        PROCEED 
        </button>
      </div>
    </form>
  );
}

export default CartRight;
