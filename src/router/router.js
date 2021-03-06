import React from "react";
import { Route } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import ViewItem from '../components/ViewItem'
import Users from '../components/Users'
import Orders from '../components/Orders'
import Slider from '../components/Slider'
import Coupon from '../components/Coupon'
import ViewCoupon from '../components/ViewCoupon'
import AddCategory from '../components/AddCategory'
import ViewCategory from '../components/ViewCategory'

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={DashBoard} />
        <Route path="/DashBoard" component={DashBoard} />
        <Route path="/ViewItem" component={ViewItem} />
        <Route path="/Users" component={Users} />
        <Route path="/Orders" component={Orders} />
        <Route path="/Slider" component={Slider} />
        <Route path="/Coupon" component={Coupon} />
        <Route path="/ViewCoupon" component={ViewCoupon} />
        <Route path="/AddCategory" component={AddCategory} />
        <Route path="/ViewCategory" component={ViewCategory} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
