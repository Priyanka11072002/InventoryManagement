import React,{useEffect,useState} from 'react'
import {Formik} from 'formik'
import { CatorySchemas } from './categorySchema'
import { Input, TextArea } from '../../app/form/feilds'
import { useAddNewCategoryMutation } from './categorySlice'
import { message } from '../api'
import FORMCARD from '../../card/FORMCARD'
import Spinner from '../../app/spinner'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const AddCategoryForm = () => {
  const [message,setMessage]  = useState<message|null>(null)   
const navigate = useNavigate()
 const initialValues = {name:'',description:''}
const [addNewCategory] = useAddNewCategoryMutation()
useEffect(()=>{
  if(message?.type&&message?.message){
   window.scrollTo(0,0)
  }
},[])
    const form = (
      <Formik initialValues={initialValues} validationSchema={CatorySchemas} onSubmit={async(values,action)=>{
        if(values.description===""){delete values.description;}
        try{
  const response:any =    await addNewCategory(values)
  console.log(response,'response')
   if(response?.data.name&&response?.data.description){
    toast.success('Added Category Successfully')
   navigate('/categories')
   }
        }catch(error){
        setMessage({type:'danger',message:error})
        }
  action.setSubmitting(true)
      }}>
  {props=>(
    <form onSubmit={props.handleSubmit}>
    <Input    name="name"  type='text'  placeholder="Enter category name"   label="Category Name " />
    <TextArea  name="description"   label="Description"   />
    <button
                            type="submit"
                            className="btn btn-primary rounded-0 me-2 mt-3"
                            disabled={props.isSubmitting}
                        >
                            {props.isSubmitting?<Spinner  text="Adding"/>:"Add"}
                        </button>
    </form>
  )}
      </Formik>  
    )
  return (
   <FORMCARD  title="Add Category" message={message}  setMessage={setMessage}  cardbody={form}/>
  )
}

export default AddCategoryForm;


