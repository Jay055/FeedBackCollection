// Shows surveyform's review 
import React , {Component} from 'react';
import {reduxForm} from 'redux-form'
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component { 
 state = {showFormReview: false};

 renderContent(){
 if(this.state.showFormReview){
    return <SurveyFormReview onCancel={()=> this.setState({showFormReview:false})}/>
    } 

  return (
  <SurveyForm onSurveySubmit={()=> this.setState({ showFormReview: true})} /> 
  )
  }

  render(){
    return (
      <div>
       
        {this.renderContent()}
    </div>
    )
  }

}


  // Clear up form values once we leave the surveyForm and review components by not adding the destroyOnUnmount:false
export default reduxForm({
  form: 'surveyForm'
}) (SurveyNew);