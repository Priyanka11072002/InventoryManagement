
import { message } from "../../features/api";


 interface Col {
   name:string;
   accessor:string;
   link?:string;
   callback?:(value:any)=>string
  
}


interface Categories {
  [k:string]:any;         
  
}

export interface DataTableProps{
cols:Col[];
data:Categories[];
title:string;
categoryItemslinks:string;
message:message|null;           
setMessage:Dispatch<setStateAction<message|null>>
handleQuery:(query:{[k:string]:string})=>void               
destroyChecked:(checked:string[])=>void
SearchFromInput:()=>JSX.Element        
categoryItemsLinks:string;
searchfrominitialvalues:{[k:string]:string}
displayMessages?:boolean;
selection?:boolean;
}


export interface SearchFormProps {
initialValues:{[k:string]:string};
FormInput:()=>JSX.Element;
handleSubmit:(values:{[k:string]:string})=>void      
}