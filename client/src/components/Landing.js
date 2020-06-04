import React, {Component, Fragment} from 'react';
import './Landing.css';

import { Link } from 'react-router-dom';
import Featured from './LandingFeatured';
import { connect } from 'react-redux'
import Footer from './Footer';


export class Landing  extends Component {
  
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
        
        
      case false:
        return (
        <div className="btn">
          <a href='/auth/google' >
          
            Get Started 
  
          </a>
                    </div>
        )
      
      default:
        return (<Fragment>
          
        <div className="btn">
            <Link to = "/surveys/" className="">
              Get Started 

            </Link>
                      </div>
      
      </Fragment>

      )}
}


  render(){
console.log(this.props.auth)
console.log('working')
  
  
  return (
    
    <div className="background">
    

{/* landing page  */}


 
    <div class="hero-area">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
              <div class="hero-content">
                  <h5>Inputly</h5>
                  <h2>Getting online feedback just got easier </h2>
                  <p>We help multiple customers get thousands of feedback daily for perfect prices. Get all the feedback you need.</p>
              </div>
            </div>
            
            <div class="col-lg-7 col-xl-6">
                <div class="subscription-form ">
                      

                  
                        <div class="form-group">
                    
                      {this.renderContent()}
               </div>
               

               
                            </div>
            </div>
        </div>
      </div>
    </div>
    <Featured />
    <Footer /> 
    
  </div>

  
 
);
};
}



const mapStateToProps = state => ({
  auth: state.auth
  
})


export default connect(mapStateToProps)(Landing);

