import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: "" };
  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // TODO - Call an action creator
    // And save the comment

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

export default CommentBox;
