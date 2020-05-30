//SurveyField contains logic to render a since text input 

import React from 'react';

// Get props from redux form passed in SurveyForm as props
export default({input, label, meta: { error, touched} }) => {
  

  return (
    <div> 
      <label>{label}</label>
      <input {...input} style={{marginBottom: '5px'}} /> 
      <div className="red-text" style={{marginBottom: '20px'}}>
      {touched && error} 
      </div>
    </div>
  )

}

