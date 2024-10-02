import { useState, useContext, createContext } from "react";
import data from "../../public/Data.json";

const ProductOperationContext = createContext();

export const useOperation = () => {
  return useContext(ProductOperationContext);
};

const ProductOperationProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [isSelectProduct,setIsSelectProduct]=useState(false)
  const [searchTerm,setSearchTerm]=useState("")

  const filterProducts = (category = selectedCategory, subCategory = selectedSubCategory) => {
    return data
      .filter((cat) => cat.category === category)
      .flatMap((cat) => cat.subCategories || [])
      .filter((subcat) => (subCategory ? subcat.name === subCategory : true))
      .flatMap((subcat) => subcat.products || []);
  };

  const getSubcategories = (category = selectedCategory) => {
    const categoryData = data.find((cat) => cat.category === category);
    return categoryData ? categoryData.subCategories : [];
  };

  return (
    <ProductOperationContext.Provider
      value={{
        selectedCategory,isSelectProduct,setIsSelectProduct,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        filterProducts,
        getSubcategories,
        searchTerm,setSearchTerm
      }}
    >
      {children}
    </ProductOperationContext.Provider>
  );
};

export default ProductOperationProvider;
