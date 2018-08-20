import React, { Component } from "react";
import "./TodoList.css";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { handleToggle, handleDelete } = this.props;
    return (
      <div className="Todolist">
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
