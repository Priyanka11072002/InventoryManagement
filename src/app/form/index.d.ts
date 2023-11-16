

// interface {

// }

//name,type,placeholder,inline,validation,label
interface InputFeild{
  label:string;
 inline?:boolean;
 validation?:boolean;
}

export  interface InputFeildProps extends React.InputHTMLAtrributes<HTMLInputElement>,InputFeild{name:string}

export interface FieldWrapperProps {
label:string;
inline?:boolean;
required?:boolean;
IdOrName:string;
children:React.ReactNode;
// callback:(label:string,inline?:boolean,required?:boolean,IdOrName:string,children:React.ReactNode)=>JSX.Element
}

// export interface classes{
// div:string;
// label:string;
// }
