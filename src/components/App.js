import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

class App extends React.Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <ul className="navbar-start">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/post">Post a Comment</Link>
            </li>
            <li className="navbar-item">{this.renderButton()}</li>
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div className="container is-fluid">
        <h1 className="title">Comment App</h1>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
