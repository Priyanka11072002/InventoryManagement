
const Modal = ({id,label,body,title,handleAction,actionLabel="delete"}) => {
    const modalHeader =   (<div className="modal-header  bg-success rounded-0 text-white">
           <h4 className="modal-title">
          {title}
           </h4>
           <button type="button" className=" btn-close  rounded-0 " data-bs-dismiss="modal"  aria-label='Close' >
   
           </button>
       </div>)
   
   
   const modalBody = (<div className="modal-body">
       <p className="text-lg-start">{body}</p>
   </div>)
   const modalFooter = (
       <div className="modal-footer border-white">
           <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
        <button type="button" className='btn btn-danger rounded-0'  onClick={handleAction} data-bs-dismiss="modal">{actionLabel}</button>
   
       </div>
   );
   
   
   
   
     return (
       <>
       <div className="modal"  id={id}    >
        <div className="modal-dialog">
         <div className="modal-content">
         {modalHeader}
      {modalBody}
      {modalFooter}
         </div>
           </div>   
     
       </div>
       </>
     )
   }
   
   export default Modal;