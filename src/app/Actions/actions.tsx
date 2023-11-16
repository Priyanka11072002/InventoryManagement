import React, { useMemo } from 'react'
import Modal from '../modals/modal'

export const Actions = ({handleDestroy,checked,title}) => {

  const rows = useMemo(()=>{
  return Object.keys(checked).filter(id=>checked[id]).length

  },[checked])

  return (
    <>
    {rows>0&&(<div className='mt-3'>
 <span className="me-2">{rows} {title} is selected for deleting</span>
<button className='ml-2  btn btn-danger rounded-0' type='button'  data-bs-toggle="modal"  data-bs-target="#deleteCategory">Delete</button>
{/* <Modal  id="categoryDelete"  title={`Delete ${title}`} body={`You are about to delete ${rows}  ${title} .This action can not be undone.`} handleAction={handleDestroy}

/> */}
 <Modal
                        id="deleteCategory"
                        label="deleteCheckedLabel"
                        title={`Delete ${title}`}
                        body={`You are about to delete ${rows} ${title.toLowerCase()}. This action cannot be undone.`}
                        handleAction={handleDestroy}
                    />
    </div>)}
    </>
  )
}

export default Actions;