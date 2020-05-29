import React, { Component, Fragment  } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import Payment from './Payments';


class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href='/auth/google'>Login with Google</a></li>
      default:
        return (<Fragment>
           <li> <Payment/> </li>
           <li>Credits: {this.props.auth.credits}</li>
        <li><a href='/api/logout'>Logout</a></li>
         
        
        </Fragment>

        )}
  }
 
  render() {
    const auth= this.props.auth
    
    return (
          <nav>

            <div className="nav-wrapper">
              <Link
               to={this.props.auth? '/surveys' : '/' } 
              className="left brand-logo">Feedback</Link>
              <ul className="right">
                {this.renderContent()}
               
              </ul>
            </div>
          </nav>
      
    );
  }
}




const mapStateToProps = state => ({
  auth: state.auth
  
})



export default connect(mapStateToProps)(Header);