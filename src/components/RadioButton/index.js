import React, {Component} from 'react';

class RadioButton extends Component{
    render(){
        return <div>
            <input type='radio'>{this.props.radioButtonLabel}</input>
        </div>
    }
}

export default RadioButton;