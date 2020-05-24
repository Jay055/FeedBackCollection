import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../components/actions';
import Landing from './Landing';


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


// 
class App extends Component {
  componentDidMount() {
    // props from actions through connect 
    this.props.fetchUser();

  }
  render() {
      return (
        <div className="container">
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
              
            </div>
          </BrowserRouter>
        </div>
      );
  };
};




// Actions are assigned to the app component as props 
export default connect(null, actions)(App);