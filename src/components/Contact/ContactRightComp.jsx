import React from 'react'

function ContactRightComp({icon,title,type}) {
  return (
    <div>
          <div className='flex  input-grp gap-6'>
              <p className='text-3xl icon'>{icon}</p>
              <input type={type} placeholder={title} />
      </div>
    </div>
  )
}

export default ContactRightComp
