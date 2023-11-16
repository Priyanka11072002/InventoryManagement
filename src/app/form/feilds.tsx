import { FieldMetaProps, useField } from "formik";
import { useEffect, useState } from "react";

export const FeildWrapper = ({label,idOrName,inline,required,children}) => {
const classes = inline?{div:'col-auto',label:'visually-hidden'}:{div:'mb-3',label:'form-label'}

  return (
    <>
    <div className={classes.div}>
      <label className={classes.label} htmlFor={idOrName}>{label}{required&&<span className="text-danger">*</span>}</label>
    {children} 
    </div>
    
    </>
  );
}


export const ErrorMsg = ({meta}:FieldMetaProps<any>) => {
  const {error,touched}  = meta;


  return (
    <>
     {error&&touched&&(<div  className="text-danger form-text  text-md-start" key={error}><span>{error}</span></div>)}
    </>
  );
}
//this is not used for search component
 const  fieldClassName = (meta:FieldMetaProps<any>,values:string|undefined| readonly string[]="",validation=true) => {
 const {error,touched}  = meta;
 let classes = "form-control  mb-3"
if(validation){
  if(touched&&error){
    classes += "is-invalid"}
  if(touched&&!error){
    
    classes += " is-valid"
 

  }
}
 return classes
}

export const Input = ({label,inline=false,validation,data,...props}) => {  
             
  const [field, meta] = useField(props);

  return (
    <>
    <FeildWrapper label={label} idOrPassword={props.id||props.name}  inline={inline} required={props.required}>
      <input   className={fieldClassName(meta,validation,props.value)} {...props}  {...field}  />
      <ErrorMsg meta={meta}/>
    </FeildWrapper> 
    </>
  );
}

export const TextArea = ({label,inline=false,validation,...props}) => {
  const [field, meta] = useField(props); 
  return (
    <>
   <FeildWrapper  label={label}  inline={inline}  idOrName={props.id||props.name}   required={props.required}>
    <textarea className={fieldClassName(meta,validation)} rows={5} {...props} {...field}>{props.value}</textarea>
    <ErrorMsg  meta={meta}/>
    </FeildWrapper>  
    </>
  );
}