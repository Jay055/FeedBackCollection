//SurveyField contains logic to render a since text input 

// Get props from redux form passed in SurveyForm as props
import React from 'react';

export default({input, label}) => {
  return (
    <div> 
      <label>{label}</label>
      <input {...input} /> 
    </div>
  )

}

