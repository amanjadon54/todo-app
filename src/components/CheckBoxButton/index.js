import React, { Component } from "react";

class CheckBoxButton extends Component {
  handleOnChangeEvent = (event) => {
    console.log("props:", this.props, "event", event);
    const { checkBoxButtonChange } = this.props;
    checkBoxButtonChange(event);
  };

  render() {
    return (
      <div key={this.props.taskCheckboxId}>
        <input
          type="checkbox"
          id={this.props.taskCheckboxId}
          name={this.props.checkBoxButtonLabel}
          value={this.props.checkBoxButtonLabel}
          onChange={this.handleOnChangeEvent}
        />
        <span>{this.props.checkBoxButtonLabel}</span>
      </div>
    );
  }
}

export default CheckBoxButton;
