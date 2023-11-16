import React, { useMemo,useCallback,useEffect,useState } from 'react'
import { useGetCategoryQuery } from './categorySlice'
import { message } from '../api';
import { useDeleteCategoryMutation } from './categorySlice';
import {Input} from '../../app/form/feilds';
import DataTable from '../../app/table/Datatable';



const CategoriesSearchForm = () => (
  <Input name="name" label="Name" type="search" placeholder="Enter category name" inline={true} validation={false} />
);


const CategoryList = () => {
const [query, setQuery] = useState("");
  const [message, setMessage] = useState<message|null>(null);  
const [deleteCategory]  = useDeleteCategoryMutation()
const result = useGetCategoryQuery(query)
const cols = useMemo(()=>[{name:'Category',accessor:'name',link:'/categories/:id'},{name:'Description',accessor:'description'}],[])
const categories = (result.isSuccess?(result.data?result.data:[]):null)
const [filterData,setFiterData] = useState([])
   
useEffect(()=>{
  setFiterData(result.data)
},[result.data])


const handleChange = (searchvalue)=>{

const getFilterData = result.data.filter((items)=>{

 if(searchvalue===""||items.name===searchvalue){

  return  items
 }else{
  return items.name.includes(searchvalue)
 }
})
setFiterData(getFilterData)
}

const SearchFromInput = ()=>( <Input type="search" placeholder="Enter Category Name"
name="name"  label="Name" inline={true} validation={false} /> )

const handleQuery = useCallback((query:string)=>{
if(query.length){
  setQuery(query)
}
},[])
console.log(filterData,'searchfiltervalue')
const  destroyChecked= useCallback(async(checked:string[])=>{
 try{
  //first way to achieve this ,delete all  target value by loop
  for (const id of checked) {
    const result = await deleteCategory(id);}

    //second way to achieve this ,delete all  target value by loop
  //   const deleteAllChecked = checked.map(async(id)=>{
  //     try{
  //       const result =    await deleteCategory(id)
  //       return result
  //     }catch(error){
  //     return error.message
  //     }

  //    })

  // const deleteAllPromise = await Promise.all(deleteAllChecked)
  // console.log(deleteAllPromise,'delete')
      //second way to achieve this ,delete all  target value by loop

 }catch(error){
setMessage({type:'danger',message:error.message})
 }

  },[deleteCategory])

useEffect(()=>{
  if(result?.isError){
    setMessage({type:"danger",message:result?.isError})      
  }
},[result?.isError])


  return (   
 
 <DataTable cols={cols}  data={categories}  title="Category"  createItemLink="/categories/create"
 message={message} setMessage={setMessage}  SearchFormInputs={CategoriesSearchForm}  handleQuery={handleQuery}
  destroyChecked={destroyChecked}  searchFormInitialValues={{name:''}}

 />

    
  )
}

export default CategoryList;
