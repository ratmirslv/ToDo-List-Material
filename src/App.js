import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.data
    };
  }

  getId = () => {
    let counter = this.state.todos.length;
    return (counter += 1);
  };
  handleToggle = id => {
    const finalTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: finalTodos
    });
  };

  handleDelete = id => {
    const deleteItem = this.state.todos.filter(
      todo => (todo.id !== id ? todo : null)
    );
    this.setState({
      todos: deleteItem
    });
  };
  handleAdd = title => {
    const todo = {
      id: this.getId(),
      title,
      completed: false
    };

    const todos = [...this.state.todos, todo];

    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Header />
        <TodoList
          todos={todos}
          handleToggle={this.handleToggle}
          handleDelete={this.handleDelete}
        />
        <Footer handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
