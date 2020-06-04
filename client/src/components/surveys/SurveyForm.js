// Add input 
import React , { Component } from 'react';
// Import reduxForm helper (communicate with Redux store), similar to the connect 
// Field rendering traditional html form elements
import { reduxForm, Field}  from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from  'react-router-dom';
import validateEmails from '../utils/validateEmails';
import formFields from './formField';


class SurveyForm extends Component { 


  
  
  renderFields(){
  
    
  return formFields.map(field=> {
    return(
      <div key={field.name}> 
        <Field type="text" name= {field.name}
        label={field.label} component={SurveyField} />
      </div>
    )
  })}

   

  render(){ 

    return (
      <div>
        <form 
        onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
      
        >
          {this.renderFields()}

        <Link to = "/surveys" >
        <button className="red btn-flat center white-text"type="submit">Cancel  
        <i className="material-icons right">cancel</i>
        </button>

        </Link>

          

        <button className="blue btn-flat right white-text"type="submit">Next  
        <i className="material-icons right">done</i>
        </button>
       
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  // console.log(values);
  const errors = {};

    // if we have no emails, give the validate function an empty string to avoid undefined errors 
  errors.recipients = validateEmails(values.recipients || '')

  formFields.forEach(({required, name }) => {
    if(required && !values[name]) {
      errors[name] = `${name} is required`
    }
  })


  return errors ;
 

}

// destroyOnUnmount false keeps the form values for reviewing, surveyform names the form in the reducer 
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);