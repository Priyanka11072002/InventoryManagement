import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "../libs/empty";

const Table = ({ cols, data, selection, checked, setChecked }) => {
  const [ids]= useState(() => {
    if (selection) {
      return data.map((items) => {
        return items.id;
      });
    } else {
      return [];
    }
  });
  const refselectAllCheckbox = useRef<HTMLInputElement | null>(null);

useEffect(()=>{
  const checkedItems = Object.keys(checked).filter(id=>checked[id])

  if(refselectAllCheckbox!==null){
   refselectAllCheckbox.current.indeterminate = checkedItems.length>0&&checkedItems.length!==ids.length;
  }

},[])

  const handleClick = (event) => {
  const {target} = event;
  const selectAllCheckboxId = {}
  if(target.id==="0"){
   for(const id of ids){
    selectAllCheckboxId[id] = target.checked;
   }
  }else{
    selectAllCheckboxId[target.id] = target.checked;
   }
  setChecked({...checked,...selectAllCheckboxId})
  };

  
  const isChecked = (id) => {
if(isEmpty(checked)){return false}
if(id===0){
  for(const id of ids){
  if(!checked[id]){
    return false
  }
  return true
  }

}
return !!checked[id]
  };

  const renderTableHeader = () => {
    return cols.map((col) => {
      return (
        <th key={`${col.name}`} scope="col">
          {col.name}
        </th>
      );
    });
  };

  const renderSelectAllCheckbox = (render) => {
const checkbox =  (<input type="checkbox"  className="form-check-input" key='selectAll' 
 checked={isChecked(0)} id={0}  ref={refselectAllCheckbox} onChange={handleClick }/>)
  if(render){
    return (<th scope="col">{checkbox}</th>)
  }
  };
  const renderCheckbox = (render,id) => {
    const checkbox =  (<input type="checkbox"  className="form-check-input" key={`item${id}`} 
 checked={isChecked(id)} id={id}  onChange={handleClick }/>)
  if(render){
    return (<td key={`checkbox${id}`}>{checkbox}</td>)
  }
  };

  const renderTableData = (item) => {
    return cols.map((col) => {
      let label;
      let tdChild = {};
      if (col.callback) {
        col.callback(item[col.accessor]);
      } else {
        label = item[col.accessor];
      }

      if (col.link) { 
        const [path, id] = col.link.split(":"); 


        tdChild = <Link to={`${path}${item[id]}`} className="text-decoration-none">{label}</Link>;
      } else {
        tdChild = <>{label}</>;
      }

      return <td key={`${col.name}${item.id}`}>{tdChild}</td>;
    });
  };

  const renderTableBody = () => {
    return data.map((items) => {
      return (
        <tr key={`tr${items.id}`}>
          {renderCheckbox(selection, items.id)}
          {renderTableData(items)}
        </tr>
      );
    });
  };
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="table-header">
          <tr>
            {renderSelectAllCheckbox(selection)}
            {renderTableHeader()}
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
