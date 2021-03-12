import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import CheckBoxButton from "./components/CheckBoxButton";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showAddTaskLabel: false, taskList: [] };
  }

  addButtonClick = () => {
    this.setState({ showAddTaskLabel: true });
  };

  taskLabelEnter = (event) => {
    const { taskList } = this.state;
    const updatedList = [
      ...taskList,
      {
        key: taskList.length + 1 + event.target.value,
        value: event.target.value,
      },
    ];
    this.setState({ showAddTaskLabel: false, taskList: updatedList });
  };

  render() {
    const { showAddTaskLabel } = this.state;
    console.log(this.state);
    return (
      <div>
        <Button
          buttonClick={this.addButtonClick}
          buttonLabel="+ Create a Task"
        />
        {showAddTaskLabel && (
          <InputField inputLabelOnKey={this.taskLabelEnter} />
        )}

        {this.state.taskList.map((task) => (
          <CheckBoxButton
            taskCheckboxId={task.key}
            checkBoxButtonLabel={task.value}
          />
        ))}
      </div>
    );
  }
}

export default App;
