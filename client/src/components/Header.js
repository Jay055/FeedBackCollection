import React, { Component, Fragment  } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import Payment from './Payments';
import './Header.css';


class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a className="black-text text-lighten-4 "href='/auth/google'>Login with Google</a ></li>
      default:
        return (<Fragment>
           <li> <Payment/> </li>
           <li className="black-text text-lighten-4 " style={{margin: '0 10px'}}> Credits: {this.props.auth.credits}</li>
        <li><a className="black-text text-lighten-4 " href='/api/logout'>Logout</a></li>
         
        
        </Fragment>

        )}
  }
 
  render() {
   
    
    return (
          <nav className="white">

            <div className="nav-wrapper black-text">
              <Link
               to={this.props.auth? '/surveys' : '/' } 
              className=" black-text left brand-logo">Inputly</Link>
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