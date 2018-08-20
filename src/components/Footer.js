import React, { Component } from "react";
import "./Footer.css";
import Button from "@material-ui/core/Button";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title });
  };
  handleSubmit = event => {
    event.preventDefault();
    const title = this.state.title;

    if (title) {
      this.props.handleAdd(title);
      this.setState({ title: "" });
    }
  };
  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="Введите задачу"
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#206ed3" }}
          onClick={this.handleSubmit}
        >
          Добавить задачу
        </Button>
      </form>
    );
  }
}

export default Footer;
