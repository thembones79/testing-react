import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  renderComments = () => {
    return this.props.comments.map(comment => {
      return (
        <li className="list-item" key={comment}>
          <span className="icon  has-text-primary">
            <i className="fas fa-chevron-right "> </i>
          </span>{" "}
          {comment}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul className="list">{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { comments: state.comments };
}

export default connect(mapStatetoProps)(CommentList);
