import React, { Component } from 'react';
import {Link} from 'react-router';

import ContactForm from 'components/ContactForm';

import banner from 'assets/images/smiling-woman.jpg';
import logo from 'assets/images/Logo.png';

class ContactUsPage extends Component {
  render() {
    return (
      <div className="contact-us-page">
        <div className="contact-us-page__header">
          <div className="contact-us-page__header-logo">
            <img src={logo} alt=""/>
          </div>
          <a className="contact-us-page__header-login-btn">Log in Now</a>
        </div>
        <div className="contact-us-page__banner">
          <div className="contact-us-page__banner-img">
            {/* <img src={banner} alt=""/> */}
          </div>
          <div className="contact-us-page__banner-content">
            <h3 className="contact-us-page__banner-title">Home of Dentistry</h3>
            <p className="contact-us-page__banner-text">Denteez was created by dentists for dentistry in order to
make the life of everyone involved in dentistry easier.</p>
          </div>
        </div>
        <div className="contact-us-page__form-section">
          <ContactForm serviceId={this.props.params.id}/>
        </div>
        <div className="contact-us-page__about-section">
          <div className="about-section">
            <h4 className="about-section__header">About Denteez</h4>
            <div className="about-section__content">
              <div className="about-section__side">Why is it always so difficult to find what you are looking for in dentistry? Whether it is the latest advancement in technology or techniques or simply a review or understanding of the vast amount of products? Perhaps finding someone to just fix your broken equipment or simply hiring new staff or looking for that new job?</div>
              <div className="about-section__side">Our mission is to give every dental professional the possibility to discuss and share all aspects of their profession, their practice and their business. We aim to make the world of dentistry easy and accessible, so every dental professional can find what they are looking for quickly and easily all in one place.</div>
            </div>
          </div>
        </div>
        <div className="contact-us-page__footer">
          <div className="footer">
            <div className="footer__side">
              <div className="footer__copyright">Denteez Copyright 2015</div>
            </div>
            <div className="footer__side">
              <ul className="footer__menu">
                
                  <li><Link className="footer__link" to="/">Support</Link></li>
                  <li><Link className="footer__link" to="/">Privacy Policy</Link></li>
                  <li><Link className="footer__link" to="/">Terms of use</Link></li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsPage;