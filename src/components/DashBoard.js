import React, { Component } from "react";
import '../adminlte.min.css'
import '../dataTables.bootstrap4.min.css'
import ResponsiveDrawer from './ResponsiveDrawer'
import AddItem from './AddItem'
import '../responsive.bootstrap4.min.css'
import '../index.css'

class DashBoard extends React.Component {

  render() {
    console.log(this.state);

    return (
      <div className="dashboard">
        <ResponsiveDrawer />
        <AddItem />
      </div>
    )

  }
}
export default DashBoard