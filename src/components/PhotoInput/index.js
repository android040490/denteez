import { withFormsy } from 'formsy-react';
import React from 'react';

const errorMessages = {
  'physicalSize' : 'uploaded image should not exceed 300x300 pixels',
  'memorySize' : 'maximum size of the uploaded image should not exceed 5MB',
  'type' : 'the uploaded file must be an image'
};
 
class PhotoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo : false,
      errorMessage : '',
      errorMessageVisibility : 'none'
    }
    this.changeValue = this.changeValue.bind(this);
  }
 
  changeValue(event) {
    if (event.currentTarget.files[0]) {
      let file = event.currentTarget.files[0]
      let self = this
      let size = file.size / 1024 / 1024;
      let type = file.type;
      let objectURL = window.URL.createObjectURL(file);

      this.setState({ photo: objectURL });
      
      if(type.indexOf('image') == -1){
        self.setError(errorMessages.type)
        this.setState({ photo: false });
        return 
      }
      this.setState({errorMessageVisibility: 'none'})
      let img = new Image();
      img.src = objectURL;

      img.onload = function(){
        window.URL.revokeObjectURL(objectURL)
        let width = this.width;
        let height = this.height;
        size > 5 ? self.setError(errorMessages.memorySize) :      
        (width > 300 || height > 300) ? self.setError(errorMessages.physicalSize): self.props.setValue(file);
      }
    }
  }

  setError(err){
    this.setState({errorMessage: err, errorMessageVisibility : 'block'})
    this.props.setValue(null)
  }

  currentPhoto(){
    if ( this.state.photo){
      return(
        <img src={this.state.photo} alt=""/>
      )
    } else {
      return(
        <div className="photo-input__text">
          <h6>Add photo</h6>
          <p>Minimum size of
            300x300 jpeg ipg
            png 5 MB
          </p>
        </div>
      )
    }
  }
 
  render() {
    
    let errorMessage = this.state.errorMessage
    let visibility = this.state.errorMessageVisibility

    return (
      <div className="photo-input">
        <label htmlFor="image-input">
          { this.currentPhoto()}
        </label>
        <input
          id="image-input"
          onChange={this.changeValue}
          type="file"
          hidden
        />
        <span className="error-message" style={{display: visibility}}>{errorMessage}</span>
      </div>
    );
  }
}
 
export default withFormsy(PhotoInput);

