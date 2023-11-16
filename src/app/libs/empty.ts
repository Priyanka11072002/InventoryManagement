//object.keys://object.keys provide key of obj  in arr,string and length does have length property ,,if you write key for checking length of value [""]
// export const isEmpty = (value) => {
//  // console.log(Object.keys(value["label"]))          
// //return (typeof value==="object"&&Object.keys(value).length===0)



// // for(let key in value){
// //   console.log(value.hasOwnProperty(key),'true')
// //   console.log(key,'label,name')
// //   console.log(value["name"],'product')
  
// // }


// //this happen in the case of array
// for(let keywithvalue of value){
// // console.log(index,'index')
// // console.log(keywithvalue,'result get in only object ')

// }


// }

// export function evenNum(...args){

//   for(let i=0;i<args.length;i++){
//   if(args[i]%2==0){
//     console.log(args[i])
//   }
//   }

// }

export const isEmpty = (value:any)=>{
   
  return value===null||value===undefined||(typeof value==="string"&&value.trim().length===0)||(typeof value==="object"&&Object.keys(value).length===0)

}
