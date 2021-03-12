import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import RadioButton from "./components/RadioButton";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showRadioButton: false };
  }

  addButtonClick = () => {
    this.setState({ showRadioButton: true });
  };

  render() {
    const { showRadioButton } = this.state;
    return (
      <div>
        <Button buttonClick={this.addButtonClick} buttonLabel="Add" />
        <InputField />
        {showRadioButton && <RadioButton />}
      </div>
    );
  }
}

export default App;
