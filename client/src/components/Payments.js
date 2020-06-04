import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from './actions';
import './Landing.css';




class Payments extends Component { 
  render() {
   

   
    return (
      <StripeCheckout
      //$5
      name="Inputly"
      description="$5 for 10 email cards"
      amount={500}
      // token received from stripe would be passed 
      token = {token => this.props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}

      >
        <button 
        
        className="headerbtn">
          Add Credit
        </button>
      </StripeCheckout>
    )
  }
}


// Pass actions as props 
export default  connect(null, actions)(Payments);