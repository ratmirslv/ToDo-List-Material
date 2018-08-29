import React, { Component } from "react";
import "./TodoList.css";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Todolist">
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>
    );
  }
}

export default connect(store => ({
  todos: store.todos
}))(TodoList);
