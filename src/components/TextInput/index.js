import { withFormsy } from 'formsy-react';
import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {

        this.props.setValue(event.currentTarget.value);
    }

    render() {

        const errorMessage = this.props.getErrorMessage();
        let { label, placeholder } = this.props
        let displayError = this.props.isPristine() ? "none" : this.props.isValid() ? "none": "block";
        let inputBorder = this.props.isPristine() ? "" : this.props.isValid() ? "#0f0" : "#f00";

        return (

            <div className="form-input">
                <div className="form-input__label"><label htmlFor="">{label}</label></div>
                <input
                    onChange={this.changeValue}
                    type="text"
                    placeholder={placeholder}
                    style={{borderColor: inputBorder}}
                />
                <span className="error-message" style={{display: displayError}}>{errorMessage}</span>
            </div>
        );
    }
}

export default withFormsy(TextInput);