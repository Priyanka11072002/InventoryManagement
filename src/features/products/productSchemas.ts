import  * as Yup  from 'yup';


const productSchemas = Yup.object({
  name:Yup.string().min(3).max(15).required() 
})
