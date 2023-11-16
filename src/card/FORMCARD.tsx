import React from 'react'
import Alert from '../app/alerts/alert'
import { isEmpty } from '../app/libs/empty';

const FORMCARD = ({title,message,setMessage,cardbody}) => {
  return (
    <>
    <div className="container-fluild">
      <div className="row">
        <div className="col-md-7  mx-auto col-lg-5">
       
          {message&&!isEmpty(message)&&(
  <div className="pb-1">
       <Alert  message={message}  setMessage={setMessage} />
     </div>
          )}


       <div className="card  shadow-lg  mt-3">
<div className="card-header text-white bg-success  rounded-0">
<h4 className="text-lg-start">{title}</h4>
<span className="text-danger">*</span><span className="text-white">Required fields</span>
</div>

<div className="card-body">
 {cardbody}
</div>
       </div>


        </div>

      </div>
    </div>


    </>
  )
}

export default FORMCARD;