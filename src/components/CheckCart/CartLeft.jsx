import React, { useContext } from 'react';
import CheckLeftComp from './CheckLeftComp';
import { useAdd } from '../../Context/AddressProvider';

function CartLeft() {
  const { toggleEdit, editMode ,addNewAddress} = useAdd();

  return (
    <div className='basis-1/2'>
      <h1 className='text-xl font-extrabold bg-[#fff6f6] p-2 mb-8'>Shipping Address</h1>
      <CheckLeftComp />
      <div className='flex justify-end gap-5 mt-48'>
        <button onClick={toggleEdit} className="bg-[#d9d9d9] px-8 py-2 rounded">
          {editMode ? "SAVE" : "EDIT"}
        </button>
        <button onClick={addNewAddress} className="bg-[#d9d9d9] px-8 py-2   p-2 rounded">
          ADD NEW ADDRESS
        </button>
      </div>
    </div>
  );
}

export default CartLeft;
