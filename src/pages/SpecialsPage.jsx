import React, { useEffect, useState } from 'react'
import { useList } from '../Context/ListProvider'
import ProductHead from '../components/Products/ProductHead'
import ProductSidebar from '../components/Products/ProductSidebar'
import ProductList from '../components/Products/ProductList'
import { MenuItem, Pagination, Select, Stack } from '@mui/material'
import { useFilter } from '../Context/FilterContext'
import { usePro } from '../Context/ProductsProvider'
import { useOperation } from '../Context/ProductOperation'
import data from "../../public/Data.json";

function SpecialsPage() {
  const {
    selectedCategory,
    selectedSubCategory,

  } = useOperation();
  const { selectedList } = useList()
  const { filters } = useFilter();
  const [openFilter, setOpenFilter] = useState(true);
  const { isGridView } = usePro();
  const [subFilters, setSubFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(isGridView ? 3 : 6);
  useEffect(() => {
    const itemsToDisplay = itemsPerPage;
    const firstItem = (page - 1) * itemsToDisplay;
    const lastItem = firstItem + itemsToDisplay;
    setDisplayedData(data.slice(firstItem, lastItem));
  }, [isGridView, page, itemsPerPage]);

  useEffect(() => {
    setItemsPerPage(isGridView ? 3 : 6);
  }, [isGridView]);
  useEffect(() => {
    const applyFilters = () => {
      let newFilteredProducts = data;
      if (filters.subCategory.length > 0) {
        newFilteredProducts = newFilteredProducts.filter(
          (product) =>
            product.subCategories &&
            product.subCategories.some((subcat) =>
              filters.subCategory.includes(subcat.name)
            )
        );
      }
 
      setSubFilters(newFilteredProducts);
    };

    applyFilters();

  }, [selectedCategory, selectedSubCategory, filters]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
 
  const SidebarProducts = subFilters
    .filter(
      (s) =>
        s.subCategories &&
        s.subCategories.some((r) => r.products && r.products.length > 0)
    )
    .flatMap((s) => s.subCategories.flatMap((r) => r.products))
    .filter(
      (product) =>
        (filters.color.length === 0 ||
          filters.color.includes(product.color.trim())) &&
        (filters.size.length === 0 ||
          filters.size.some((size) => {
            const sizeParts = product.size.split(" x ");
            return sizeParts.includes(size.trim());
          }))
    );
  const paginatedProducts = SidebarProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <div className='w-11/12 m-auto'>
      <ProductHead selectedCat="TOOL Box" selectSub={selectedList} />

          <div className="flex gap-10 mt-16">
            <ProductSidebar setf={setOpenFilter} />
  
              <ProductList items={paginatedProducts} />
    
      
        </div>
        <div className="flex gap-32 items-center justify-center">
          <Stack
           
            direction="row"
            alignItems="center"
            justifyContent="center"
            my={3}
            spacing={2}
          >
            <Pagination
              className="bg-[#fff1f1]"
              count={Math.ceil(data.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
            />
            <Select
              onChange={(e) => setItemsPerPage(e.target.value)}
              value={itemsPerPage}
            >
              <MenuItem
                className="menu-item" value={3}>
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
  )
}

export default SpecialsPage
