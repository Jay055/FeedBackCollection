import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import formFields from './formField';
import * as actions from '../actions/index'


// Get props from survey new, submitSurvey from actions, history from withRouter
const SurveyReview = ({onCancel, formValues, submitSurvey, history}) => {
      // console.log(formValues)


      // Loop  through form fields a
const reviewFields = formFields.map(({label, name }) => {
  return (
      <div key={name}>
         <label> {label} </label>
          <div>{formValues[name]}  </div>
      </div>
  )
})
  
      

  
  
  return (
    <div> 
  
    <h4> Please confirm your entries </h4>
      <div>
       {reviewFields}
      </div>
      <button
      className="red btn-flat center white-text"
      onClick={()=> 
      
        onCancel()}
      >
      Back to Review
      </button>
      <button
      className="blue btn-flat right white-text"
          // submitSurvey from action values
      onClick={()=> submitSurvey(formValues, history)}
      >
      Send Survey
      <i className="material-icons right"> email</i>
      </button>
    </div>
  )

  }



const mapStateToProps= (state) => {
  // console.log(state);
 
  return {
    formValues: state.form.surveyForm.values
  }
  
}

    // Pass actions as props through connect, use with Router 
export default connect(mapStateToProps, actions) (withRouter(SurveyReview));