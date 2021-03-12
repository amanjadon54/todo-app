import React, { Component } from "react";

class CheckBoxButton extends Component {
  render() {
    return (
      <div>
        <input type="checkbox">{this.props.checkBoxButtonLabel}</input>
      </div>
    );
  }
}

export default CheckBoxButton;
