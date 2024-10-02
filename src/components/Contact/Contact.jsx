import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div className="w-11/12 m-auto h-11/12 mb-10">
        <h3 className="text-red-600 font-semibold my-4">Contact Us</h3>
        <div className="flex ">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </div>
  );
}

export default Contact;
