import React, { useEffect, useState } from "react";
import { useFilter } from "../../Context/FilterContext";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function ProductSidebar({ setf }) {
  const { filters, handleFilterChange, clearFilters } = useFilter();

  const subCategories = [
    "View All Baskets",
    "Baskets Parts",
    "Mesh Baskets",
    "Synthetic Weave Baskets",
    "Trike Baskets",
  ];

  const sizes = ["10","20","30"];
  const colors = ["White","Black","Grey"];

  return (
    <div className="bg-[#fff6f6] p-5">
      <h3 className="border-b-2 border-red-600">FILTER BY</h3>
      <div>
        <button
          className="my-2 bg-[#f7eeee] p-2 px-4 rounded" 
          onClick={() => {
            clearFilters();
            setf(true);
          }}
        >
          X clear all
        </button>
        <h4 className="font-bold">Sub Category</h4>
        <FormGroup>
          {subCategories.map((subCat, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={filters.subCategory.includes(subCat)}
                  onChange={() => {
                    handleFilterChange("subCategory", subCat);
                    setf(false);
                  }}
                />
              }
              label={subCat}
            />
          ))}
        </FormGroup>
      </div>
      <div className="my-4">
        <h4 className="font-bold">Size</h4>
        <FormGroup>
          {sizes.map((size, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={filters.size.includes(size)}
                  onChange={() => {
                    handleFilterChange("size", size);
                    setf(false);
                  }}
                />
              }
              label={size}
            />
          ))}
        </FormGroup>
      </div>
      <div>
        <h4 className="font-bold">Color</h4>
        <FormGroup>
          {colors.map((color, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={filters.color.includes(color)}
                  
                  onChange={() => {
                    handleFilterChange("color", color);
             

                    setf(false);
                  }}
                />
              }
              label={color}
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
}

export default ProductSidebar;
