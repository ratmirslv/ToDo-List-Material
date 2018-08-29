import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
