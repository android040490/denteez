import { withFormsy } from 'formsy-react';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getEnquiryTypes } from 'redux-store/actions';

import { getListOfEnquiryTypes } from 'redux-store/selectors';

class EnquiryTypeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherEnqValue: ''
    };

    this.changeOtherEnq = this.changeOtherEnq.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  componentDidMount() {
    this.props.getEnquiryTypes();
  }

  componentWillUpdate(){
    if(!this.props.getValue() && this.props.listEnqTypes.length){
      this.props.setValue(this.props.listEnqTypes[0].name)
    }
  }

  renderSelect() {
    return (
      <select defaultValue={this.props.listEnqTypes[0].name} name="enq-types" id="" onChange={this.changeValue}>
        {this.props.listEnqTypes.map((item, index) => {
          return (
            <option key={index} value={item.name}>{item.name}</option>
          )
        })}
      </select>
    )
  }

  changeValue(event) {
    this.inputRef.style.display = 'none';
    if (event.currentTarget.value !== 'Other') {
      this.props.setValue(event.currentTarget.value);
    } else {
      this.props.setValue(this.state.otherEnqValue);
      this.inputRef.style.display = 'block';
      this.inputRef.focus()
    }
  }

  changeOtherEnq(event) {
    this.props.setValue(event.currentTarget.value)
  }

  render() {

    const errorMessage = this.props.getErrorMessage();
    let { label } = this.props;
    let displayError = this.props.isPristine() ? "none" : this.props.isValid() ? "none" : "block";
    let inputBorder = this.props.isPristine() ? "" : this.props.isValid() ? "#0f0" : "#f00";

    return (
      <div className="form-input">
        <div className="form-input__label"><label htmlFor="">{label}</label></div>
        <div className="select">
          {this.props.listEnqTypes.length && this.renderSelect()}
          <div className="form-input__hidden-input">
            <input
              onChange={this.changeOtherEnq}
              ref={el => this.inputRef = el}
              type="text"
              style={{ display: 'none', borderColor: inputBorder }}
              placeholder="Other"
            />
          </div>
          <span className="error-message" style={{ display: displayError }}>{errorMessage}</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getEnquiryTypes
}

const mapStateToProps = (state) => {
  return {
    listEnqTypes: getListOfEnquiryTypes(state)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withFormsy(EnquiryTypeInput));