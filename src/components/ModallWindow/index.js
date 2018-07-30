import React, { Component } from 'react';

class ModallWindow extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        this.modal.style.display = 'none';
    }
    
    render() {
        let { title, message, description } = this.props;

        return (
            <div ref={el => this.modal = el} className="modall-window" >
                <div className="modall-window__content">
                    <h3 className="modall-window__title">{title}</h3>
                    <div className="modall-window__message">
                        <span>{message}:</span>
                        {description}
                    </div>
                    <button className="modall-window__close-btn" onClick={this.handleClick}>Закрыть</button>
                </div>
            </div>
        );
    }
}

export default ModallWindow;