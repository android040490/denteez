import Formsy from 'formsy-react';
import React from 'react';
import R from 'ramda';

import {submitContactUsForm} from 'API';

import TextInput from 'components/TextInput';
import PhotoInput from 'components/PhotoInput';
import TextareaField from 'components/TextareaField';
import EnquiryTypeInput from 'components/EnquiryTypeInput';
import ModallWindow from 'components/ModallWindow';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
      response : false,
      success : false,
      answer : {
        title : '',
        message : ''
      }
    };

    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }
  

  submit(model) {

    let {serviceId} = this.props
    let request = R.merge(model, { department: serviceId })

    submitContactUsForm(request)
      .then((response) => {
        this.setState({
          response : true,
          success : true, 
          answer : {
            title : 'Thank you for your inquiry',
            message : response.data.data.message
        } })
      })
      .catch((error) => {
        this.setState({ 
          response : true,
          success : false,
          answer : {
            title : error.response.data.error.description,
            message : error.response.data.error.details[0].description}  })
      });
  }

  render() {
    let { success, answer, response} = this.state;
    return (
      <div className="contact-form">
        <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <div className="contact-form__form">
            <p className="contact-form__description">
              Fields marked “*” are required
            </p>
            <div className="contact-form__form-input">
              <EnquiryTypeInput
                name="enquiry_type"
                validations="minLength:2"
                validationError="The enquiry type must be more than one character"
                required
                label="Enquiry Type *"
              />
            </div>
            <div className="contact-form__form-short-input">
              <TextInput
                name="user_name"
                validations={{
                  matchRegexp: /^[[а-яА-ЯёЁa-zA-Z][[а-яА-ЯёЁa-zA-Z0-9-_\S]{1,20}$/
                }}
                validationError="Invalid user name"
                required
                label="Name *"
                placeholder="Dentist"
              />
            </div>
            <div className="contact-form__form-short-input">
              <TextInput
                name="email"
                validations={{
                  isEmail: true,
                  maxLength: 50}}
                validationErrors={{
                  isEmail: 'You have to type valid email',
                  maxLength: 'You can not type in more than 50 characters'
                }}
                required
                label="Email *"
                placeholder="rachelm@gmail.com"
              />
            </div>
            <div className="contact-form__form-input">
              <TextInput
                name="subject"
                validations={{
                  matchRegexp: /^[[а-яА-ЯёЁa-zA-Z][[а-яА-ЯёЁa-zA-Z0-9-_\.]{1,20}$/
                }}
                validationError="Invalid subject"
                required
                label="Subject *"
              />
            </div>
            <div className="contact-form__form-input">
              <TextareaField
                name="description"
                validations="maxLength:1000"
                validationError="This field can not exceed 1000 characters"
                required
                label="Description *"
              />
            </div>

            <PhotoInput
              name="file"
              validations={{
                myCustomIsFiveValidation: function (values, value) {
                  values;
                  value;
                  if(value){
                    return true;
                  }
                }
              }}
              required
            />
          </div>


          <button className="contact-form__btn-submit" type="submit" disabled={!this.state.canSubmit}>Submit</button>
         
        </Formsy>
        { 
            <div className="popup-message" style={{display : response ? 'block' : 'none', color : success ? '#228B22' : '#f00' }}>
              <h3 className="popup-message__title">{answer.title}</h3>
              <p className="popup-message__description">{answer.message}</p>
            </div> 
          }   
      </div>
    );
  }
}