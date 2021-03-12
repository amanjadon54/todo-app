import React, {Component} from 'react';

class Button extends Component {
    render(){
        return <button onClick={this.props.buttonClick}>{this.props.buttonLabel}</button>
    }
}

export default Button;