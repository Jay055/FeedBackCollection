import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import  { fetchSurveys }  from '../actions';
import './SurveyList.css';

// Display with Pie Chart 
import ReactSvgPieChart from 'react-svg-piechart';



class SurveyList extends Component { 
  componentDidMount(){
    this.props.fetchSurveys()
  }

  
  renderSurveys() {
    return this.props.surveys.map(survey => {
      console.log(survey.yes)
      console.log(survey.no)
      console.log(survey)

      const data = [
        {title: "yes", value: survey.yes, color: "#C13C37"},
        {title: "no", value: survey.no, color: "#EFB413"},
        
      ]
  
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">Title: {survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
          <span style={{color: "#C13C37" }}>Yes: {survey.yes} </span>
          <br /> 
            <span style={{ color: "#EFB413"}}> No: {survey.no}</span>

            <div className= "piechartdisplay">

            {survey.yes  > 0 &&
       
          <ReactSvgPieChart data={data} />
                                        
            
            }
                         

            </div>

            
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { surveys: state.surveys }
}

export default connect (mapStateToProps, {fetchSurveys}) (SurveyList); 