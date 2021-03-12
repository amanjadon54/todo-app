import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    const { buttonClick } = this.props;
    buttonClick("abcdef");
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.buttonLabel}</button>;
  }
}

export default Button;
