import React, { useEffect, useState } from 'react'
import { isEmpty } from '../libs/empty'

const Alert = ({message,setMessage,timeout=10000}) => {
  const [show,setShow]  = useState(true)
useEffect( () => {
  if (timeout) {
      const timer = setTimeout(() => {
          setShow(false);
          setMessage(null);
      }, timeout);
      return () => clearTimeout(timer);
  }
}, [setMessage, timeout]);


const handleClick = () => {
  setShow(false);
  setMessage(null);
}
  return (
    <>
  
    
     { show && message && !isEmpty(message) && (
                <div className={`alert alert-${message.type}  alert-dismissible fade show rounded-0`}  role='alert'>
                   {`${message.message}`?<span> something  was found
                   incorrect                
                   </span>:null}
                    <button type="button"  onClick={handleClick} className='btn-close'  aria-label='close'/>
                </div>
            )}
    </>
  )
}

export default Alert