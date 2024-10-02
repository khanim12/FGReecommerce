import React from "react";
import { useAdd } from "../../Context/AddressProvider";

function CheckLeftComp() {
  const {
    addresses,
    updateAddress,
    removeAddress,
    editMode,
  } = useAdd();

  return (
    <div className="flex flex-col">
      {addresses.map((address) => (
        <div key={address.id} className="grid grid-cols-2 mb-4">
          <div>
            <span className="text-red-600">Company:</span>
            {editMode ? (
              <input
                type="text"
                name="company"
                defaultValue={address.company}
                onBlur={(e) => updateAddress(address.id, e)}
              />
            ) : (
              <span>{address.company}</span>
            )}
          </div>
          <div>
            <span className="text-red-600">Email:</span>
            {editMode ? (
              <input
                type="email"
                name="email"
                defaultValue={address.email}
                onBlur={(e) => updateAddress(address.id, e)}
              />
            ) : (
              <span>{address.email}</span>
            )}
          </div>
          <div>
            <span className="text-red-600">Name:</span>
            {editMode ? (
              <input
                type="text"
                name="name"
                defaultValue={address.name}
                onBlur={(e) => updateAddress(address.id, e)}
              />
            ) : (
              <span>{address.name}</span>
            )}
          </div>
          <div>
            <span className="text-red-600">Address:</span>
            {editMode ? (
              <input
                type="text"
                name="address"
                defaultValue={address.address}
                onBlur={(e) => updateAddress(address.id, e)}
              />
            ) : (
              <span>{address.address}</span>
            )}
          </div>
          <div>
            <span className="text-red-600">Phone:</span>
            {editMode ? (
              <input
                type="text"
                name="phone"
                defaultValue={address.phone}
                onBlur={(e) => updateAddress(address.id, e)}
              />
            ) : (
              <span>{address.phone}</span>
            )}
          </div>

          <button
            onClick={() => removeAddress(address.id)}
            className="text-red-500 ml-4"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default CheckLeftComp;
