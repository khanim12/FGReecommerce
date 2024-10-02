import React from "react";
import DealerInfo from "./DealerInfo";
import DealerInput from "./DealerInput";
import "./dealer.css";
import Dealerfooter from "./Dealerfooter";
import EmailPopper from "../AdditionalComp/EmailPopper";
function DealerComp() {
  const datas = [
    {
      name: "California Dealers:",
      desc: " A Copy of Your California Resale Certificate Or Seller's Permit .",
    },
    {
      name: " U.S. Dealers:",
      desc: " A Copy of Your State Resale Certificate, Business License or Proof of Existing business.",
    },
    {
      name: "International Dealers:",
      desc: "A Copy Showing Proof of an Existing business from Government documentation.",
    },
    {
      name: " All Dealers:",
      desc: "Required to submit A Copy of their Government Issued ID.",
    },
  ];
  return (
    <div>
      <h3 className="font-extrabold text-center my-4">Information Required</h3>
      <p className="mb-6">
        Thank you for your interest in becoming an F & R Cycle dealer, To become
        a dealer and establish an account we would need the following
        information;
      </p>
      {datas.map((d, index) => {
        return (
          <div className="flex gap-2 " key={index}>
            <h4 className="font-bold">* {d.name}</h4>
            <p>{d.desc}</p>
          </div>
        );
      })}
      <div className="flex items-center gap-1">
     
        <p className="my-7">
          If you have any issues please feel free to call us at 800-718-2453 or
        </p>
        <p className="text-red-600 font-bold" >        <EmailPopper EmailTitle="E-mail customer support" />
        </p>
      </div>

      <div>
        <div>
          <DealerInfo title="Business information " />
        </div>

        <div className="grid grid-cols-2 gap-5 my-5">
          <div>
            <DealerInput name="Business Name" type="text" />
          </div>
          <div>
            <DealerInput name="Street Address" type="text" />
          </div>
          <div>
            <DealerInput name="City" type="text" />
          </div>
          <div>
            <DealerInput name="State/Province" type="text" />
          </div>
          <div>
            <DealerInput name="Zip/Postal Code" type="number" />
          </div>
          <div>
            <div className="flex justify-between items-center gap-5 ">
              <span className="input-name">Country</span>
              <select className="dealer-input">
                <option value="select">Select a country</option>
                <option value="Turkey	">Turkey </option>
                <option value="Azerbaijan">Azerbaijan</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <DealerInfo title="Business information " />
        </div>
        <div className="grid grid-cols-2 gap-5 my-5">
          <div>
            <DealerInput name="First Name" type="text" />
          </div>
          <div>
            <DealerInput name="Last Name" type="text" />
          </div>
          <div>
            <DealerInput name="Email Address" type="email" />
          </div>
          <div>
            <DealerInput name="Fax Number" type="number" />
          </div>
          <div className="flex  ">
            <div className="flex w-[500px] items-center gap-20 ">
              <span className="input-name">Telephone</span>

              <input className="phone-input w-[300px]" type="number" />
            </div>
            <div className="flex w-[120px] items-center gap-2">
              <span className="input-name">Fax</span>

              <input className="phone-input w-[80px]" type="number" />
            </div>
          </div>
          <div>
            <DealerInput name="Website" type="text" />
          </div>
        </div>
      </div>
      <div>
        <div className="my-8">
          <DealerInfo title="Choose Your Username And Password " />
        </div>
        <div>
          <div className="flex justify-between items-center gap-5 ">
            <span className="input-name">User Name</span>

            <input className="user-input" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 my-8">
          <div>
            <DealerInput name="Password" type="password" />
          </div>
          <div>
            <DealerInput name="Re-Enter Password" type="password" />
          </div>
          <div>
            <DealerInput name="Secret Question" type="text" />
          </div>
          <div>
            <DealerInput name="Secret Answer" type="text" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <DealerInfo title="General information " />
        </div>
        <div className="grid grid-cols-2 gap-5 my-5">
          <div>
            <DealerInput
              name="State sales resale
tax certificate "
              type="text"
            />
          </div>
          <div>
            <div className="flex  items-center  gap-2 ">
              <span className="input-name ml-10 text">Attach Document</span>
              <label htmlFor="file-upload" className="custom-file-upload">
                Choose File
              </label>
              <input id="file-upload" className="dealer-input" type="file" />
              <input className="dealer-input fayl w-[1400px]" type="text" />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="input-name">Comments</span>
          <textarea className="textArea" rows="2"></textarea>
        </div>
      </div>
      <div className="my-10">
        <Dealerfooter />
      </div>
    </div>
  );
}

export default DealerComp;
