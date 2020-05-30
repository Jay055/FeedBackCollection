// Add input 
import React , { Component } from 'react';
// Import reduxForm helper (communicate with Redux store), similar to the connect 
// Field rendering traditional html form elements
import { reduxForm, Field}  from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from  'react-router-dom';
import validateEmails from '../utils/validateEmails';


class SurveyForm extends Component { 
  renderFields(){
    return (
      <div>
        <Field type="text" name="title" label="Survey Title" component={SurveyField} /> 
        <Field type="text" name="Subject" label="Subject Line" component={SurveyField} /> 
        <Field type="text" name="Email" label="Email Body" component={SurveyField} /> 
        <Field type="text" name="Recipient" label="Recipient List" component={SurveyField} /> 
      </div>
    )
  }

  render(){ 
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values=> { console.log(values)})}
        >
          {this.renderFields()}

        <Link to = "/surveys" >
        <button className="red btn-flat center white-text"type="submit">Cancel  
        <i className="material-icons right">cancel</i>
        </button>

        </Link>

          

        <button className="teal btn-flat right white-text"type="submit">Next  
        <i className="material-icons right">done</i>
        </button>
       
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {};

    // if we have no emails, give the validate function an empty string to avoid undefined errors 
  errors.Recipient = validateEmails(values.Recipient || '')

  if (!values.title){
    errors.title = 'You must provide a title '
  } if (!values.Subject) {
    errors.Subject = 'You must provide a subject'
  } if (!values.Email){
    errors.Email = 'You must provide an email body'
  }  if(!values.Recipient){
    errors.Recipient = 'You must provide recipients emails'
  }

  return errors ;
 

}


export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);