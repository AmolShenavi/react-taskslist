import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMessage } from "../actions/message";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleClick(text) {
    if (text !== "") {
      this.props.addMessage(text);
      this.setState({ text: "" });
    }
  }

  render() {
    const { message } = this.props;
    const { text } = this.state;

    return (
      <>
        <div id="container">
            <input
            type="text"
              value={text}
              placeholder="Enter Task"
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <button
              className="button"
              onClick={() => {
                this.handleClick(text);
              }}
            >
              +
            </button>
            </div>
          <div id="list">
            <ul>
              {message.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
      </>
    );
  }
}

const mapStateToProps = ({ message }) => ({ message });

const mapDispatchToProps = (dispatch) =>
//  @AmolShenavi 
bindActionCreators(
    {
      addMessage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
