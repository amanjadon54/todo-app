import React, { Component } from "react";

class CheckBoxButton extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          id={this.props.taskCheckboxId}
          name={this.props.checkBoxButtonLabel}
          value={this.props.checkBoxButtonLabel}
        />
        <span>{this.props.checkBoxButtonLabel}</span>
      </div>
    );
  }
}

export default CheckBoxButton;
