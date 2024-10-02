import React, { createContext, useContext, useState } from 'react'
const ProductContext = createContext()
export const usePro = () => useContext(ProductContext)
function ProductsProvider({ children }) {
    const [isGridView,setIsGridView]=useState(true)
  return (
      <ProductContext.Provider value={{isGridView,setIsGridView}}>
          {children}
   </ProductContext.Provider>
  )
}

export default ProductsProvider
