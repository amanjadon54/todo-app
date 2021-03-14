import "./App.css";
import Button from "./components/Button";
import InputField from "./components/InputField";
import CheckBoxButton from "./components/CheckBoxButton";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddTaskLabel: false,
      toDoTaskList: [],
      completedTaskList: [],
    };
  }

  addButtonClick = () => {
    this.setState({ showAddTaskLabel: true });
  };

  taskLabelEnter = (event) => {
    const { toDoTaskList } = this.state;
    const updatedList = [
      ...toDoTaskList,
      {
        key: toDoTaskList.length + 1 + event.target.value,
        value: event.target.value,
      },
    ];
    this.setState({ showAddTaskLabel: false, toDoTaskList: updatedList });
  };

  checkBoxChange = (event) => {
    debugger;

    const { toDoTaskList, completedTaskList } = this.state;
    const { checked, id } = event.target;
    const updatedList = [...toDoTaskList];
    const updatedCompletedList = [...completedTaskList];

    debugger;

    let foundIndex;
    let strikeValue = updatedList.filter((element, index) => {
      if (element.key == id) {
        foundIndex = index;
      }
      return element.key === id;
    })[0];

    if (strikeValue === undefined) {
      return false;
    }

    if (checked) {
      updatedList.splice(foundIndex, 1);
      updatedCompletedList.push(strikeValue);
    }

    this.setState({
      toDoTaskList: updatedList,
      completedTaskList: updatedCompletedList,
    });
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
        <h1>To Do Items</h1>
        {this.state.toDoTaskList.map((task) => (
          <CheckBoxButton
            key={task.key}
            taskCheckboxId={task.key}
            checkBoxButtonLabel={task.value}
            checkBoxButtonChange={this.checkBoxChange}
          />
        ))}

        <h1>Completed Items</h1>
        {this.state.completedTaskList.map((completedTask) => (
          <CheckBoxButton
            key={completedTask.key}
            taskCheckboxId={completedTask.key}
            checkBoxButtonLabel={completedTask.value}
            checkBoxButtonChange={this.checkBoxChange}
            checkBoxChecked={true}
          />
        ))}
      </div>
    );
  }
}

export default App;
