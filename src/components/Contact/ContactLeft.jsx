import ContactLeftComp from "./ContactLeftComp";
import { FiPhone } from "react-icons/fi";
import { LiaFaxSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import EmailPopper from "../AdditionalComp/EmailPopper";

function ContactLeft() {
  return (
    <div className="basis-1/3">
      <h3 className="font-extrabold text-2xl my-4">Contact Information</h3>
      <div className="flex gap-4 my-8">
        <p className="text-7xl opacity-85 ">
          <SlLocationPin />
        </p>
        <div>
          <p className="w-2/4 text-lg">
            F & R Cycle, Inc. 7220 Somerset Blvd, Paramount California, 90723
            USA
          </p>
        </div>
      </div>
      <ContactLeftComp
        icon={<FiPhone />}
        title="Call Us:"
        desc="800-718-2453"
      />
      <ContactLeftComp icon={<LiaFaxSolid />} title="Fax:" desc="800??????" />

      <div className="flex gap-4 my-8">
        <p className="text-7xl opacity-85 ">
          <MdOutlineMail />
        </p>
        <div>
          <h5 className="text-red-600 font-bold">Emila Us</h5>
          <EmailPopper EmailTitle={"Info@fnrco.com"} />
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
