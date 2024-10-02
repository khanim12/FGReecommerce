import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  const RemoveItem = (id) => {
    setCartItems((prevItems)=>prevItems.filter((item)=>item.id !== id))
  }
  const cancelItem = () => {
   setCartItems([])
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart,RemoveItem,cancelItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
