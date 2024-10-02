import React, { createContext, useContext, useState } from "react";
const ListContext = createContext();
export const useList = () => useContext(ListContext);

function ListProvider({ children }) {
  const [selectedList, setSelectedList] = useState("");
  const [special,setSpecial]=useState(false)
  
  return (
    <ListContext.Provider value={{ selectedList, setSelectedList,setSpecial }}>
      {children}
    </ListContext.Provider>
  );
}

export default ListProvider;
