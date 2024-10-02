import React from "react";

function DealerInput({ name,type }) {
  return (
    <div className="flex justify-between items-center gap-5 ">
      <span className="input-name">{name}</span>

      <input className="dealer-input" required type={type} />
    </div>
  );
}

export default DealerInput;
