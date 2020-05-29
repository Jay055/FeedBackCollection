import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../components/actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';



// 
class App extends Component {
  componentDidMount() {
    // props from actions through connect 
    this.props.fetchUser();

  }
  render() {
      return (
       
          <BrowserRouter>
            <div className="container">
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
              
            </div>
          </BrowserRouter>
        
      );
  };
};




// Actions are assigned to the app component as props 
export default connect(null, actions)(App);