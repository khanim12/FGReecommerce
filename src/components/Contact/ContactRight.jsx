import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import ContactRightComp from './ContactRightComp';
import ContactRightFooter from './ContactRightFooter';

function ContactRight() {
  return (
    <div className='basis-2/3'>
     <h3 className="font-extrabold text-2xl my-4">Send us an Email</h3>
      <div className='grid grid-cols-2 gap-5 my-8'>
        <ContactRightComp title="Full Name" icon={<IoPersonOutline />} type="text" />
        <ContactRightComp title="Company" icon={<FaRegBuilding/>} type="text"/>
        <ContactRightComp title="800-718-2453" icon={<FiPhone/>} type="number"/>
        <ContactRightComp title="Email Address" icon={<CiMail/>} type="email"/>
      
      </div>
      <div className='flex input-grp gap-6'>
          <p className='text-3xl icon'><GoPencil /></p>
          <textarea rows={5} placeholder='Comment'></textarea>
      </div>
      <ContactRightFooter/>
    </div>
  )
}

export default ContactRight
