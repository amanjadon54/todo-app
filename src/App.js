import "./App.css";
import "./App.scss";
import Button from "./components/Button";
import InputField from "./components/InputField";
import CheckBoxButton from "./components/CheckBoxButton";
import DialogModal from "./components/DialogModal";

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
    DialogModal.close("my-custom-modal");
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
          buttonClassName="button"
          buttonClick={this.addButtonClick}
          buttonLabel="+ Create a Task"
        />
        {showAddTaskLabel && (
          <DialogModal id="my-custom-modal">
            <h1>Provide task detail (Limit 50 characters)</h1>
            <InputField
              inputLabelClassName="addTextInput"
              inputMaxLength="50"
              inputSize="70"
              inputLabelOnKey={this.addTaskEnter}
            />
            {/* <Button
              buttonClassName="button"
              buttonClick={DialogModal.close("my-custom-modal")}
              buttonLabel="Close"
            /> */}
          </DialogModal>
        )}
        <h3>To Do Items</h3>
        {this.state.toDoTaskList.map((task) => (
          <CheckBoxButton
            key={task.key}
            taskCheckboxId={task.key}
            checkBoxButtonLabel={task.value}
            checkBoxButtonChange={this.checkBoxToDoTaskChange}
            checkBoxClassName="checkbox"
            checkBoxLabelClassName="label"
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
            checkBoxClassName="checkbox"
            checkBoxLabelClassName="label"
          />
        ))}
      </div>
    );
  }
}

export default App;
