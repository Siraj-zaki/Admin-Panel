import React from "react";
import { Route } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import ViewItem from '../components/ViewItem'
import Users from '../components/Users'
import Orders from '../components/Orders'

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={DashBoard} />
        <Route path="/DashBoard" component={DashBoard} />
        <Route path="/ViewItem" component={ViewItem} />
        <Route path="/Users" component={Users} />
        <Route path="/Orders" component={Orders} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
