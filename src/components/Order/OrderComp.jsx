import React from "react";
import MyCartItems from "../MyCart/MyCartItems";
import { useNavigate } from "react-router-dom";

function OrderComp() {
  const navigate = useNavigate();
  const address = {
    id: 1,
    company: "ers",
    email: "alexlacey@gmail.com",
    name: "Aaden Lacey",
    address: "9818 Birchdale Ave, Downey, CA 90240, United States",
    phone: "3239966632",
    isEditing: false,
  };
  return (
    <div>
      <h1 className="text-red-500 my-4">Order Verification</h1>
      <span className="text-base">
        Review your order and delivery address then click proceed to complete
        your order
      </span>
      <div>
        <MyCartItems />
        <div className="flex gap-6 mt-5">
          <div className="basis-1/2">
            <h1 className="text-xl font-extrabold bg-[#fff6f6] p-2 mb-8">
              Delivery Address
            </h1>
            <div className="grid grid-cols-2 mb-4">
              <div className="">
                <span className="text-red-600">Company:</span>

                <input
                  type="text"
                  name="company"
                  defaultValue={address.company}
                />
              </div>
              <div>
                <span className="text-red-600">Email:</span>
                <input type="email" name="email" defaultValue={address.email} />
              </div>
              <div>
                <span className="text-red-600">Name:</span>
                <input type="text" name="name" defaultValue={address.name} />
              </div>
              <div>
                <span className="text-red-600">Address:</span>
                <input
                  type="text"
                  name="address"
                  defaultValue={address.address}
                />
              </div>
              <div>
                <span className="text-red-600">Phone:</span>
                <input type="text" name="phone" defaultValue={address.phone} />
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <h1 className="text-xl font-extrabold bg-[#fff6f6] p-2 mb-8">
              Special Instructions
            </h1>
            <textarea className="w-[600px] border-2 h-[120px]" ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5 my-10">
        <button
          onClick={() => navigate("/checkCart")}
          className="bg-[#d9d9d9] px-8 py-2   p-2 rounded"
        >
          BACK
        </button>
        <button className="bg-red-600 text-white px-8 py-2   p-2 rounded">
          PROCEED
        </button>
      </div>
    </div>
  );
}

export default OrderComp;
