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

  addTaskEnter = (event) => {
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

  moveElementBetweenList = (fromList, toList, event) => {
    const { checked, id } = event.target;
    let foundIndex;
    let strikeValue = fromList.filter((element, index) => {
      if (element.key === id) {
        foundIndex = index;
      }
      return element.key === id;
    })[0];

    if (strikeValue === undefined) {
      return false;
    }

    fromList.splice(foundIndex, 1);
    toList.push(strikeValue);

    return { fromList, toList };
  };

  checkBoxToDoTaskChange = (event) => {
    const { toDoTaskList, completedTaskList } = this.state;
    const updatedList = [...toDoTaskList];
    const updatedCompletedList = [...completedTaskList];

    const { fromList, toList } = this.moveElementBetweenList(
      updatedList,
      updatedCompletedList,
      event
    );

    this.setState({
      toDoTaskList: fromList,
      completedTaskList: toList,
    });
  };

  checkBoxCompletedTaskChange = (event) => {
    const { toDoTaskList, completedTaskList } = this.state;
    const updatedList = [...toDoTaskList];
    const updatedCompletedList = [...completedTaskList];

    const { fromList, toList } = this.moveElementBetweenList(
      updatedCompletedList,
      updatedList,
      event
    );

    this.setState({
      toDoTaskList: toList,
      completedTaskList: fromList,
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
        {showAddTaskLabel && <InputField inputLabelOnKey={this.addTaskEnter} />}
        <h3>To Do Items</h3>
        {this.state.toDoTaskList.map((task) => (
          <CheckBoxButton
            key={task.key}
            taskCheckboxId={task.key}
            checkBoxButtonLabel={task.value}
            checkBoxButtonChange={this.checkBoxToDoTaskChange}
          />
        ))}

        <h3>Completed Items</h3>
        {this.state.completedTaskList.map((completedTask) => (
          <CheckBoxButton
            key={completedTask.key}
            taskCheckboxId={completedTask.key}
            checkBoxButtonLabel={completedTask.value}
            checkBoxButtonChange={this.checkBoxCompletedTaskChange}
            checkBoxChecked={true}
          />
        ))}
      </div>
    );
  }
}

export default App;
