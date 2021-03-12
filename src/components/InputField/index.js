import React, { Component } from "react";

class InputField extends Component {
  handleEnter = (event) => {
    if (event.keyCode == 13) {
      const { inputLabelOnKey } = this.props;
      inputLabelOnKey(event);
    }
  };

  render() {
    return (
      <input value={this.props.InputFieldValue} onKeyDown={this.handleEnter} />
    );
  }
}

export default InputField;
