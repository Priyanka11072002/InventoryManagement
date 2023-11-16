
interface commonfields {
 readonly id:string;
 readonly createdAT:string;
 readonly updated:string
}

interface draftcategory {
  [k:string]:string;
  description?:string;
}

export interface Category extends commonfields,draftcategory{}

export interface  removeErrors {
  invalidData?:never;
 error?:never;}

export interface  message {
  invalidData?:never;
 error?:never;
 message:{[k:string]:string|boolean};
}

export interface formfields extends removeErrors {
  invalidData?:{[k:string]:string};
  error?:never;
  message?:never;
}

export interface error extends  removeErrors {
  invalidData?:never;
  error?:string;
  message?:never;
  
}

export interface categorystate extends removeErrors{
  category?:Category
}