import React, { Component, Fragment } from 'react'
import homepiechart from '../assets/image/homepiechart.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


export class LandingFeatured extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return  <div className="btn">
        <a href='/auth/google' >
        
          Get Started 

        </a>
                  </div>
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
 
  render() {
    return (
      <div>
           {/* <!-- Feature Area Starts --> */}
    <div className="feature-area">
      <div className="container">
        <div className="row mb-d-30">
          <div className="col-lg-4 col-sm-6 mb--30">
            <div className="feature-widget">
              <div className="widget-icon">
                <i className="icon icon-edit-72"></i>
              </div>
              <div className="content">
                <h5>Easy to Create</h5>
                <p>Our wonderful interface makes it possible to create a survey in just minutes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb--30">
            <div className="feature-widget">
              <div className="widget-icon">
                <i className="icon icon-layers-3"></i>
              </div>
              <div className="content">
                <h5>Perfect Pricing </h5>
                <p>We consider giving the best possible quality at the most affordable rates. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb--30">
            <div className="feature-widget">
              <div className="widget-icon">
                <i className="icon icon-tablet-mobile"></i>
    
              </div>
              <div className="content">
                <h5>Real-time review of your answers</h5>
                <p>Watch your participants responses being collected in real-time and analyze your feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
{/* <!-- Content Starts --> */}
<div className="content-section-01">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-sm-6 col-md-5 col-xl-5">
        <div className="content-left-image">
          <img src={homepiechart} alt="" />
        </div>
      </div>
 
      <div className="col-lg-7 col-sm-6 col-md-7 col-xl-6 offset-xl-1">
        <div className="content-right-content">
          
            <h2>Interprete your data results </h2>
            <p>We designed a user interface for immediate intepretation of your results.</p>


            {/*  */}
           

                        {this.renderContent()} 



                        {/*  */}
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}



const mapStateToProps = state => ({
  auth: state.auth
  
})



export default connect(mapStateToProps)(LandingFeatured);