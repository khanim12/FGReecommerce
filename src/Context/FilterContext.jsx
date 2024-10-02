import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    subCategory: [],
    size: [],
    color: [],
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const currentFilters = prev[filterType];
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [filterType]: currentFilters.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentFilters, value],
        };
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      subCategory: [],
      size: [],
      color: [],
    });
  }

  return (
    <FilterContext.Provider value={{ filters, handleFilterChange, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
