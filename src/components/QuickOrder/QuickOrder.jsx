import React from "react";
import { useList } from "../../Context/ListProvider";
import QuickTable from "./QuickTable";
import { useQuick } from "../../Context/QuickProvider";
import { useNavigate } from "react-router-dom";
function QuickOrder() {
  const { selectedList } = useList();
  const { clearQuick } = useQuick();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="capitalize text-red-600 font-semibold">
        Tool Box/{selectedList}
      </h1>
      <div className="font-extrabold mt-5">Quick Order Form</div>

      <div className="table-container">
        <QuickTable group="group1" />
        <QuickTable group="group2" />
        <QuickTable group="group3" />
      </div>
      <div className="flex justify-end items-center my-8 gap-6">
        <button onClick={clearQuick} className="btn bg-gray-400">
          CLEAR
        </button>
        <button
          onClick={() => navigate("/mycart")}
          className="btn bg-red-600 text-white"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default QuickOrder;
