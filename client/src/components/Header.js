import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href='/auth/google'>Login with Google</a></li>
      default:
        return <li><a>Logout</a></li>
    }
  }
 
  render() {
    const auth= this.props.auth
    console.log(auth);   
    return (
          <nav>

            <div className="nav-wrapper">
              <a className="left brand-logo">Feedback</a>
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