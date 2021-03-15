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
          className={this.props.checkBoxClassName}
          id={this.props.taskCheckboxId}
          name={this.props.checkBoxButtonLabel}
          value={this.props.checkBoxButtonLabel}
          onChange={this.handleOnChangeEvent}
          checked={this.props.checkBoxChecked}
        />

        <label
          className={this.props.checkBoxLabelClassName}
          data-content={this.props.checkBoxButtonLabel}
        >
          {this.props.checkBoxButtonLabel}
        </label>
      </div>
    );
  }
}

export default CheckBoxButton;
