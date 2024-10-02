import React, { createContext, useState, useContext } from 'react';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      company: 'ers',
      email: 'alexlacey@gmail.com',
      name: 'Aaden Lacey',
      address: '9818 Birchdale Ave, Downey, CA 90240, United States',
      phone: '3239966632',
      isEditing: false,
    },
    {
      id: 2,
      company: 'xyz',
      email: 'john.doe@example.com',
      name: 'John Doe',
      address: '1234 Maple Street, San Francisco, CA 94123, United States',
      phone: '4155551234',
      isEditing: false,
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => {
    setEditMode(!editMode); 
  };

  const addNewAddress = () => {
    const newAddress = {
      id: addresses.length + 1,
      company: '',
      email: '',
      name: '',
      address: '',
      phone: '',
      isEditing: true,
    };
    setAddresses([...addresses, newAddress]);
  };
  const removeAddress = (id) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address.id !== id)
    );
  };
  const updateAddress = (id, e) => {
    const { name, value } = e.target;
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === id ? { ...address, [name]: value } : address
      )
    );
  };

  return (
    <AddressContext.Provider value={{ addresses, addNewAddress, updateAddress, toggleEdit, editMode,removeAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAdd = () => useContext(AddressContext);
