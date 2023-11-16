
export const generateQuery = (value)=>{  
                                      
    return "?"+ Object.entries(value).map(([key,value])=>{       
          if(value){
            return `${key} = ${value}`
          }
          return undefined

    }).filter((value)=>value!==undefined).join("&")                                                                           //[[],[],[]] with indexnum
  
  }
  

