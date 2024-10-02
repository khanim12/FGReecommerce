import React from "react";

function ContactLeftComp({ icon, title, desc }) {
  return (
    <div className="flex gap-4 my-8">
      <p className="text-7xl opacity-85 ">{icon}</p>
      <div>
        <h5 className="text-red-600 font-bold">{title}</h5>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
}

export default ContactLeftComp;
