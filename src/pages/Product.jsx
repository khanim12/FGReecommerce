import { useEffect, useState } from "react";
import ProductSidebar from "../components/Products/ProductSidebar";
import ProductList from "../components/Products/ProductList";
import { useOperation } from "../Context/ProductOperation";
import data from "../../public/Data.json";
import Pagination from "@mui/material/Pagination";
import ProductHead from "../components/Products/ProductHead";
import { useFilter } from "../Context/FilterContext";
import { MenuItem, Select, Stack } from "@mui/material";
import { usePro } from "../Context/ProductsProvider";

function Product() {
  const {
    selectedCategory,
    selectedSubCategory,
    filterProducts,
    getSubcategories,
    setSelectedSubCategory,
    setSelectedCategory,
  } = useOperation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showProductList, setShowProductList] = useState(false);
  const { filters } = useFilter();
  const [openFilter, setOpenFilter] = useState(true);
  const { isGridView } = usePro();
  const [subFilters, setSubFilters] = useState([]);
  const [showDefaultProducts, setShowDefaultProducts] = useState(true);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(isGridView ? 3 : 6);
  const subCategories = getSubcategories();
  const [displayedData, setDisplayedData] = useState([]);
  useEffect(() => {
    const itemsToDisplay = itemsPerPage;
    const firstItem = (page - 1) * itemsToDisplay;
    const lastItem = firstItem + itemsToDisplay;
    setDisplayedData(data.slice(firstItem, lastItem));
  }, [isGridView, page, itemsPerPage]);
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
    const filteredByCategory = filterProducts();
    setFilteredProducts(filteredByCategory);
  };
  useEffect(() => {
    setItemsPerPage(isGridView ? 3 : 6);
  }, [isGridView]);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedSubCategory, filters]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDefaultProducts(false);
    setSelectedSubCategory(null);
    setShowProductList(false);
  };

  const handleSubCategorySelect = (subcat) => {
    if (selectedSubCategory === subcat.name) {
      setSelectedSubCategory(null);
      setShowProductList(false);
      setShowDefaultProducts(false);
    } else {
      setSelectedSubCategory(subcat.name);
      setShowProductList(true);
      setShowDefaultProducts(false);
    }
  };

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

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const paginatedSubProducts = SidebarProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return (
    <div className="product-page w-11/12 m-auto my-10">
      {subCategories.length == 0 && showDefaultProducts && (
        <div className="grid grid-cols-4 items-center justify-center">
          {data.slice(0, 8).map((p, i) => (
            <div
              className="my-6 cursor-pointer items-center justify-center flex flex-col"
              onClick={() => handleCategorySelect(p.category)}
              key={i}
            >
              {p.subCategories && p.subCategories[0] && (
                <img
                  className="border-b-2 pb-5 border-gray-500 w-[220px]	"
                  src={p.subCategories[0].img}
                  alt={p.subCategories[0].name}
                />
              )}
              <h1 className="flex text-sm text-red-600 justify-center items-center font-semibold my-3">
                {p.category}
              </h1>
            </div>
          ))}
        </div>
      )}

      {!showProductList && subCategories.length > 0 && (
        <div
          className="subcategory-selection
        grid grid-cols-4 items-center justify-center"
        >
          {subCategories.map((subcat) => (
            <div
              onClick={() => handleSubCategorySelect(subcat)}
              className="flex my-6 cursor-pointer items-center justify-center  flex-col "
              key={subcat.name}
            >
              <img
                className="border-b-2 pb-5 border-gray-500 w-[220px]	"
                src={subcat.img}
                alt={subcat.name}
              />
              <button className="flex text-sm text-red-600 justify-center items-center font-semibold my-3 cursor-pointer">
                {subcat.name}
              </button>
            </div>
          ))}
        </div>
      )}

      {showProductList && (
        <div>
          <ProductHead
            selectedCat={selectedCategory}
            selectSub={selectedSubCategory}
          />
          <div className="flex gap-10 mt-16">
            <ProductSidebar setf={setOpenFilter} />
            {openFilter ? (
              <ProductList items={paginatedProducts} />
            ) : (
              <ProductList items={paginatedSubProducts} />
            )}
          </div>
        </div>
      )}

      {showProductList && (
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
      )}
    </div>
  );
}

export default Product;
