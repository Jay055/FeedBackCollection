import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../components/actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';



import '../assets/css/style.css';
import '../assets/css/custom.css';
import '../assets/css/settings.css';



// 
class App extends Component {
  componentDidMount() {
    // props from actions through connect 
    this.props.fetchUser();

  }
  render() {
      return (
       
          <BrowserRouter>
            <div>
              <Header />
              <div className= "container">

              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
              </div>
           
            </div>

          </BrowserRouter>
        
      );
  };
};




// Actions are assigned to the app component as props 
export default connect(null, actions)(App);