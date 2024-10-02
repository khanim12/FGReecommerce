import React, { useState } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { usePro } from "../../Context/ProductsProvider";
import { useOperation } from "../../Context/ProductOperation";
function ProductHead({selectedCat,selectSub}) {
  const {  setIsGridView } = usePro()
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="product-head-left">
        <h3 className="text-red-700">{selectedCat}/{ selectSub}</h3>
      </div>
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
  );
}

export default ProductHead;
