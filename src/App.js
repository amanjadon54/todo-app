import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import CheckBoxButton from "./components/CheckBoxButton";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showAddTaskLabel: false };
  }

  addButtonClick = () => {
    this.setState({ showAddTaskLabel: true });
  };

  taskLabelEnter = () => {
    console.log("pressed label enter");
    this.setState({ showAddTaskLabel: false });
  };

  render() {
    const { showAddTaskLabel } = this.state;
    return (
      <div>
        <Button
          buttonClick={this.addButtonClick}
          buttonLabel="+ Create a Task"
        />
        {showAddTaskLabel && (
          <InputField inputLabelOnKey={this.taskLabelEnter} />
        )}
      </div>
    );
  }
}

export default App;
