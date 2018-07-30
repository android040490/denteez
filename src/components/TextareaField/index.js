import { withFormsy } from 'formsy-react';
import React from 'react';
 
class TextareaField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.changeValue = this.changeValue.bind(this);
  }
 
  changeValue(event) {
    
    this.props.setValue(event.currentTarget.value);
    this.setState({count: event.currentTarget.value.length})
  }
 
  render() {
    
    const errorMessage = this.props.getErrorMessage();
    let {label} = this.props
    let {count} = this.state
    let displayError = this.props.isPristine() ? "none" : this.props.isValid() ? "none": "block";
    let inputBorder = this.props.isPristine() ? "" : this.props.isValid() ? "#0f0" : "#f00";

    return (
      <div className="form-input">
        <div className="form-input__label">
            <label htmlFor="">{label}</label>
            <span>{`(${count}/1000)`}</span>
        </div>
        <textarea
          onChange={this.changeValue}
          type="text"
          style={{borderColor: inputBorder}}
          // value={this.props.getValue() || ''}
        />
        <span className="error-message" style={{display: displayError}}>{errorMessage}</span>
      </div>
    );
  }
}
 
export default withFormsy(TextareaField);