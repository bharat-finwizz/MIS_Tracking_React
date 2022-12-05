import React from 'react'

 function Alert(props) {
    
  const capitalize = (word)=>{
    if (word === "danger"){
      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

   }

    return (
<>



     
<div >
       {/* this props.alert and && is an syntax its says that if props.alert is true then only return the next code else false */}
      { props.alert &&
    
      
      
      
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:-{props.alert.msg }
      </div>}




      
      </div>
      </>
    )
}
export default Alert