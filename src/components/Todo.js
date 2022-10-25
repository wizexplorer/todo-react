import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { task: "Check mails", id: 1 },
        { task: "Read articke", id: 2 },
        { task: "Complete HW", id: 3 },
      ],
      currentTask: "",
    };
  }
  handleChange = (e) => {
    // not using function(e) but (e) => because arrow fn returns this of the obj itself wheareas function returns this of window obj/global obj
    this.setState({
      currentTask: e.target.value,
    });
  };
  handleSubmit = (e) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          task: this.state.currentTask,
          id: this.state.tasks.length + 1,
        },
      ],
      currentTask: "",
    });
  };
  handleDelete = (id) => {
    let nArr = this.state.tasks.filter((taskObj) => {
      return taskObj.id !== id;
    });
    nArr.forEach((task, idx) => {
      task.id = idx + 1;
    });
    console.log(nArr);
    this.setState({
      tasks: [...nArr],
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currentTask}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.state.tasks.map((taskObj) => (
            <li key={taskObj.id}>
              <p>{taskObj.task}</p>
              <button onClick={() => this.handleDelete(taskObj.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// rcc for react class component & rfce for export functional component & rfc for react functional component
