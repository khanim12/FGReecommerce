import React from "react";
import { useQuick } from "../../Context/QuickProvider";

function QuickTable({ group }) {
  const { reference } = useQuick();
  const data = reference[group] || [];

  const renderRows = () => {
    const rows = [];
    const totalRows = 12; 

    for (let i = 0; i < totalRows; i++) {
      if (i < data.length) {
     
        rows.push(
          <tr key={i}>
            <td>{data[i].id}</td>
            <td>{data[i].quantity}</td>
          </tr>
        );
      } else {
        
        rows.push(
          <tr key={i}>
            <td></td>
            <td></td>
          </tr>
        );
      }
    }
    return rows;
  };

  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="header-reference">Reference</th>
            <th className="header-quantity">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()} 
        </tbody>
      </table>
    </div>
  );
}

export default QuickTable;
