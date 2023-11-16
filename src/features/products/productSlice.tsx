import { emptySplitApi } from "../api/apiSlice";


export const productApi = emptySplitApi.injectEndpoints({
  endpoints:(builder)=>({
  getProduct:builder.query({query:(product)=>({url:product&&product.trim().length?`/products${product}`:'/products',validateStatus:(response,result)=>{
  if(result?.error){return true}
  return response.ok
  }})
}),
getProductId:builder.query({query:(id)=>({url:`/products${id}`,method:'GET',body:id,validateStatus:(response,result)=>{
    if(result?.invalidData||result?.error){ return true}
    return response.ok
    }}),
   }),
 addNewProduct:builder.mutation({query:(product)=>({url:'/products',method:'POST',body:product,validateStatus:(response,result)=>{
 if(result?.invalidData||result?.error){ return true}
 return response.ok
 }}),
 invalidatesTags:["Product"]
}),
editProduct:builder.mutation({query:(product)=>({url:`/products${product.id}`,method:'PUT',body:product,validateStatus:(response,result)=>{
    if(result?.invalidData||result?.error){ return true}
    return response.ok
    }}),
   }),
   deleteProduct:builder.mutation({query:(id)=>({url:`/products${id}`,method:'DELETE',body:id,validateStatus:(response,result)=>{
    if(result?.invalidData||result?.error){ return true}
    return response.ok
    }}),
   }),
  }) 
})

export const {useGetProductQuery,useGetProductIdQuery,useAddNewProductMutation,useDeleteProductMutation,useEditProductMutation}  =  productApi;