import React, { Component } from "react";
import '../adminlte.min.css'
import '../dataTables.bootstrap4.min.css'
import ResponsiveDrawer from './ResponsiveDrawer'
import '../responsive.bootstrap4.min.css'
import '../index.css'

class Coupon extends React.Component {
  state = {
    sliderid: "",
    sliderstatus: '',
    title: '',
    btntext: '',
    btnlink: '',
    description: '',
    image: '',
  }

  render() {
    console.log(this.state);

    return (
      <div className="dashboard" style={{ paddingTop: 100 }}>
        <ResponsiveDrawer />
        <section class="content">
          <div class="container-fluid">
            <div class="container bg-white p-4 mt-5 shadow" style={{ borderRadius: "10px" }}>
              <h5 class="mb-2">Coupon</h5>
              <hr />
              <div class="row">
                <div class="ol-sm-12 col-md-4 col-4">
                  <form method="post" action="https://clinkdelivery.com/admin/slider" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="lDU5tVnWtVuj7m96v2TCsgetZ5WDKunqIbJaIVnX"></input>
                    <div class="form-group">
                      <label for="name" class="font-weight-bold">Coupon Code</label>
                      <input type="hidden" name="sldid" id="sldId" onChange={(e) => this.setState({ sliderid: e.target.value })}></input>
                      <input type="text" onChange={(e) => this.setState({ sliderid: e.target.value })} class="form-control " aria-describedby="text" placeholder="Coupon Code" disabled=""></input>
                    </div>
                    <div class="form-group">
                      <label for="title" class="font-weight-bold">Discount %</label>
                      <input type="text" id="sldTitle" class="form-control" onChange={(e) => this.setState({ title: e.target.value })} name="title" aria-describedby="text" placeholder="%"></input>
                    </div>
                    <div class="form-group">
                      <div className="form-group">
                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i>Generate</button>
                      </div>
                    </div>

                  </form>
                </div>
                <div class="col-sm-12 col-md-4 col-4">
                  <div class="form-group">
                    <div class="form-group">
                      <label for="title" class="font-weight-bold">Max Discount</label>
                      <input type="text" id="sldTitle" class="form-control" onChange={(e) => this.setState({ title: e.target.value })} name="title" aria-describedby="text" placeholder="Max Discount"></input>
                    </div>
                    <div class="form-group">
                      <label for="title" class="font-weight-bold">Expiray Date</label>
                      <input type="date" id="sldTitle" class="form-control" onChange={(e) => this.setState({ title: e.target.value })} name="title" aria-describedby="text" placeholder="Title"></input>
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    )

  }
}
export default Coupon