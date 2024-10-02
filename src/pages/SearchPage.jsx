import React, { useEffect, useState } from "react";
import { useOperation } from "../Context/ProductOperation";
import productsData from "../../public/Data.json";
import { MenuItem, Pagination, Select, Stack } from "@mui/material";
import ProductItem from "../components/Products/ProductItem";
import { useFilter } from "../Context/FilterContext";
import ProductSidebar from "../components/Products/ProductSidebar";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

import { usePro } from "../Context/ProductsProvider";
import ProductList from "../components/Products/ProductList";

function SearchPage() {
  const { searchTerm } = useOperation();
  const {isGridView,setIsGridView}=usePro()
  const { filters } = useFilter();
  const [displayedData, setDisplayedData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(isGridView ? 3 : 6);

  useEffect(() => {
    const applyFilters = () => {
      let newFilteredProducts = productsData;
      if (filters.subCategory.length > 0) {
        newFilteredProducts = newFilteredProducts.filter(
          (product) =>
            product.subCategories &&
            product.subCategories.some((subcat) =>
              filters.subCategory.includes(subcat.name)
            )
        );
      }
  
      if (searchTerm && searchTerm.trim() !== "") {
        newFilteredProducts = newFilteredProducts.filter((product) => {
          const isCategoryMatch = product.category
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          const isSubCategoryMatch =
            product.subCategories &&
            product.subCategories.some((sub) =>
              sub.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
          return isCategoryMatch || isSubCategoryMatch;
        });
      }
      

      setFilteredProducts(newFilteredProducts);
    };

    applyFilters();
  }, [searchTerm, filters]);
  useEffect(() => {
    const itemsToDisplay = itemsPerPage;
    const firstItem = (page - 1) * itemsToDisplay;
    const lastItem = firstItem + itemsToDisplay;
    setDisplayedData(productsData.slice(firstItem, lastItem));
  }, [isGridView, page, itemsPerPage]); 
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    setItemsPerPage(isGridView ? 3 : 6);
  }, [isGridView])
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const sidebarProducts = paginatedProducts.filter(s => s.subCategories && s.subCategories.some(r => r.products && r.products.length > 0)).flatMap((s) => s.subCategories.flatMap(r => r.products)).filter(product => (filters.color.length === 0 || filters.color.includes(product.color.trim())) && (filters.size.length === 0 || filters.size.some((size) => {
    const sizeParts = product.size.split(" x ")
    return sizeParts.includes(size.trim())
  })))
  const paginatedSubProducts = sidebarProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <div className="search-results-container w-11/12 m-auto my-10 ">
      <div>
        <div className="flex justify-between">
        <h3 className="text-red-600">Search Results</h3>
          <h3 className="font-extrabold">Results For: <span className="font-thin">{searchTerm }</span></h3>
          <div className="product-head-right flex gap-3">
        <label>Sort by:</label>
        <select className="border px-3 w-[180px]">
          <option value="relevance">Relevance</option>
        </select>
        <button onClick={()=>setIsGridView(true)}>
          <ViewListIcon />
        </button>
        <button onClick={()=>setIsGridView(false)}>
          <ViewModuleIcon />
        </button>
      </div>
        </div>
        <div className="flex gap-10 my-10">
      <div className="sidebar " style={{ width: "20%", padding: "10px" }}>
        <ProductSidebar />
      </div>

      <div className="results" style={{ width: "80%", padding: "10px" }}>
              <ProductList items={paginatedSubProducts} />

          </div>
          </div>
          <div className="flex gap-32 items-center justify-center">
           <Stack 
          direction="row"
          alignItems="center"
          justifyContent="center"
          my={5}
          spacing={2}
        >
          <Pagination
            count={Math.ceil(productsData.length / itemsPerPage)} 
            page={page}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
          <Select
            onChange={(e) => setItemsPerPage(e.target.value)}
            value={itemsPerPage}
          >
            <MenuItem className="menu-item" value={3}>
              Items Per Page 3
            </MenuItem>
            <MenuItem className="menu-item" value={6}>
              Items Per Page 6
            </MenuItem>
            <MenuItem className="menu-item" value={9}>
              Items Per Page 9
            </MenuItem>
          </Select>
        </Stack>
          <p className=" p-4 bg-[#fff1f1]">
            Items per page <span className="bg-[#ffe2e5]">{itemsPerPage}</span>
          </p>
        </div>
      </div>
   
    </div>
  );
}

export default SearchPage;
