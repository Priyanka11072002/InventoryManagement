
 
// interface desktop {
//  [key:string]:string, 
//  backgroundColor:'string',
//  lang:'string'
// }

//  const configfeature = {
//     theme:'light',
//     backgroundColor:'purple',
//     lang:'em'
//  }

// const theme = configfeature['theme']
// const lang = configfeature['lang']

// console.log(`theme: ${theme} `)
// console.log(`lang: ${lang} `)


// interface commonfield {
//    readonly id:string,
//    readonly createAt:string,
//    readonly updateAt:string
//  }
//  interface draftcategory {
//    [k:string]:string,
//    name:string,
//    discription?:string
//  }
//  interface category extends commonfield,draftcategory{}
//   function createCategory({id,name,description}:category){
//    console.log(id,'id')
//    const createAt = new Date().toISOString()
//    const updateAt = new Date().toISOString()
//    const createObject:category = {
//      id,
//      name,
//      createAt,
//      updateAt                    
//    }
 
//    if(description){
//     createObject.description = description
//    }
//    return createObject
//   }
//   const newcategory = createCategory({id:"2",name:"electronic",description:"fan,ac,cooler,vending machine are electronic product"})
//    console.log(newcategory,'newcategory') 


// const handleFilter = (filterText) => {
//   const targetId = Number(filterText);

//   const filtered = data.filter(item => {

//     if (filterText === ''||item.id===targetId) {
//       return item;
//     }
//     else {
//       return item.title.includes(filterText)
//     }
//   });
 
//   setFilterValue(filtered);
// };
