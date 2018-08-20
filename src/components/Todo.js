import React, { Component } from "react";
import "./Todo.css";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onCangeItem = () => {
    let { handleToggle, id } = this.props;
    handleToggle(id);
  };
  onDeleteItem = () => {
    let { handleDelete, id } = this.props;
    handleDelete(id);
  };

  render() {
    const StyleTodo = `${this.props.completed ? "Todo completed" : "Todo"}`;
    return (
      <div className={StyleTodo}>
        <Checkbox
          checked={this.props.completed}
          color="default"
          onChange={this.onCangeItem}
        />
        <p className="todo-title">{this.props.title}</p>
        <IconButton onClick={this.onDeleteItem}>
          <DeleteIcon style={{ color: "#206ed3" }} />
        </IconButton>
      </div>
    );
  }
}

export default Todo;
