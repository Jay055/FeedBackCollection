import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../components/actions';




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
              
            </div>
          </BrowserRouter>
        </div>
      );
  };
};




// Actions are assigned to the app component as props 
export default connect(null, actions)(App);