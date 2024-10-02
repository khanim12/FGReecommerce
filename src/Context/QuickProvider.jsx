import  { createContext, useContext, useState } from 'react';

const QuickContext = createContext();
export const useQuick = () => useContext(QuickContext);

function QuickProvider({ children }) {

  const [reference, setReference] = useState({})
  const [currentGroup, setCurrentGroup] = useState("group1")
  const maxItemsPerGroup = 12
  const addQuick = (pro) => {
    setReference((prevRef)=> {
      const currentGroupItems = prevRef[currentGroup] || [];
      if (currentGroupItems.length >= maxItemsPerGroup) {
        const nextGroup = `group${Object.keys(prevRef).length + 1}`
        setCurrentGroup(nextGroup)
        return {
          ...prevRef,
          [nextGroup]:[pro]

        }
      }
      return {
        ...prevRef,
        [currentGroup]:[...currentGroupItems,pro]
      }
    })
  }
  const clearQuick = () => {
    setReference({})
    currentGroup("group1")
}
    return (
        <QuickContext.Provider value={{ reference, addQuick ,clearQuick}}>
            {children}
        </QuickContext.Provider>
    );
}

export default QuickProvider;
