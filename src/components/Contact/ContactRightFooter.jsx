import React from "react";
import robot from "../../assets/images/r.jpg";
import { FiSend } from "react-icons/fi";

function ContactRightFooter() {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="border-2	 left flex justify-between items-center bg-[#f9f9f9] gap-20">
          <label className="sidebar-label-container" htmlFor="robot">
            <input type="checkbox" id="robot" />
            <span className="checkmark-g checkmark"></span>
            I'm not a robot
          </label>
          <div>
            <img className="robot-img" src={robot} alt="" />
            <span className="text-sm text-gray-600">Privacy- Terms</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="checkbox" className="sidebar-label-container">
            <input id="checkbox" type="checkbox" />
            <span className="checkmark checkmark-r"></span>
            CC my email
          </label>
          <button className="flex items-center gap-2 text-red-600 foot-btn">
            <FiSend /> SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactRightFooter;
