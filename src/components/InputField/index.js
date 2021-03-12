import React, {Component} from 'react';

class InputField extends Component{
    render(){
        return <input>{this.props.inputLabelName}</input>
    }
}

export default InputField;