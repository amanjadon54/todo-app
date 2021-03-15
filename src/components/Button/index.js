import React, { Component } from "react";
import "./style.css";

class Button extends Component {
  handleClick = () => {
    const { buttonClick } = this.props;
    buttonClick(); //Actual call of the passed function from props
  };

  render() {
    return (
      <button className={this.props.buttonClassName} onClick={this.handleClick}>
        {this.props.buttonLabel}
      </button>
    );
  }
}

export default Button;
