import React from 'react'

function DealerInfo({title}) {
  return (
    <div className='flex bg-[#fff6f6] p-3'>
          <h3 className='font-extrabold'>{title} -</h3>
          <span>All fields are required</span>
    </div>
  )
}

export default DealerInfo
