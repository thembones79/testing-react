import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };
  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // TODO - Call an action creator
    // And save the comment
    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  render() {
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <div className="field ">
            <div className="control ">
              <textarea
                onChange={this.handleChange}
                value={this.state.comment}
                className="textarea box"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button  is-primary  box">
                Submit Comment →
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
