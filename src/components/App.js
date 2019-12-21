import React from "react";
import { Route } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default () => {
  return (
    <div className="container is-fluid">
      <h1 className="title">Comment App</h1>
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};
