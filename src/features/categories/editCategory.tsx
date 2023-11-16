import React,{useCallback, useEffect, useMemo, useState} from 'react'
import { useGetCategoryIdQuery, useEditCategoryMutation, useDeleteCategoryMutation} from '../categories/categorySlice'
import { message } from '../api'

import { Formik } from 'formik'
import { Input, TextArea } from '../../app/form/feilds'
import { useNavigate ,useParams} from 'react-router-dom'
import Spinner from '../../app/spinner'
import FORMCARD from '../../card/FORMCARD'
import Modal from '../../app/modals/modal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const EditCategory = () => {
 
    const [editCategory]= useEditCategoryMutation()
    const [deleteCategory] = useDeleteCategoryMutation()
    const {categoryId} = useParams();
    const navigate = useNavigate()
    const [message, setMessage] = useState<message | null>(null);

       const result =  useGetCategoryIdQuery(categoryId)
     

    const initialValues = useMemo(()=>{
        if(result.isSuccess&&result.data){
     const initialVal = {name:result.data?.name,id:categoryId,description:result.data?.description}
     return initialVal;
        }else{
          return  {name:"",id:"",description:""}
        }
    },[result.isSuccess,result.data])

    const handleDestroy  = useCallback(async()=>{

     if(categoryId.length){
        const {error,invalidData}   =  await deleteCategory(categoryId)
        try{
            // if(result.data?.name===""&&result.data?.description===""){
            //     setMessage({type:'success',message:"Category deleted successfully"})
            //  navigate('/categories')
            //  toast.success("Delete category Successfylly")

            // }
            if(error){
              toast.error("Something has found incorrect") 

          setMessage({type:'danger',message:error})
            } 
            if(invalidData){
                actions.setErrors(invalidData)
                setMessage({type:'danger',message:'Please correct the errors below'})

            } 
        }catch(error){
          toast.warn("Something has found incorrect") 

     setMessage({type:'danger',message:error.message})
        }
   
     }

    },[categoryId,navigate,deleteCategory])

    const form = <Formik initialValues={initialValues}   enableReinitialize={true} onSubmit={async(values,actions)=>{
      console.log(values,'values')
      if(values.description===""){delete values.description}

      try{
     const {error,invalidData}  = await editCategory({...values})

     actions.setSubmitting(false)
if(result.data?.name&&result.data?.description){
  toast.success("Edit category Successfylly")
navigate('/categories')
}

if(error){
  toast.error("Something has found incorrect") 

  setMessage({type:"danger",message:error})

}

if(invalidData){
  actions.setErrors(invalidData)
  setMessage({type:"danger",message:"Please correct the errors below"})

}
      }catch(error){
   toast.warn("Something has found incorrect") 
        setMessage({type:"danger",message:error.message})
      }
      
    }}>

        {props=>(
            <>
            {result.isFetching?<Spinner/>:(<>
                <form  onSubmit={props.handleSubmit}>
             <Input  name="name" type="text" label="Name"  placeholder="Enter Category Name" required={true}/>   
             <TextArea  name="description"  label="Description"/>

             <button className=" btn btn-success rounded-0" type="submit" disabled={props.isSubmitting}>{props.isSubmitting?<Spinner text="updating"/>:"update"}</button> 
             <button
                                type="button"
                                className="btn btn-danger rounded-0 m-3"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteCategory"
                            >
                                Delete
                            </button>
            </form>
    
            </>)}
     
            </>
        )}
    </Formik>

  return (
    <>

  
    <FORMCARD title="Edit Category"  message={message}  setMessage={setMessage}  cardbody={form} />
    <Modal  title="Delete Category" id="deleteCategory"  label="deleteCategoryLabel"
  body="Are you sure you want  to delete this category ? this action can not undone."  handleAction={handleDestroy}/>

    </>
  )
}  

export default EditCategory;