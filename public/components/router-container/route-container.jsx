/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import AdminMain from "../admin/adminMain";
import ResumePage from "../viewer/resumePage";

export default class RouterContainier extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch location={this.props.location}>
            <Route exact path="/" component={ResumePage} />
            <Route exact path="/admin" component={AdminMain} />
          </Switch>
        </Router>
      </div>
    );
  }
}
