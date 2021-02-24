import React, { Component } from "react";
import '../adminlte.min.css'
import '../dataTables.bootstrap4.min.css'
import '../responsive.bootstrap4.min.css'
import '../index.css'
class AddItem extends React.Component {
  state = {
    name: "",
    description: "etc",
    coverimage: "cover",
    bottleimage: "image",
  }
  render() {
    console.log(this.state);

    return (
      <div className="dashboard">
        {/* <ResponsiveDrawer /> */}
        {/* <TabPanel /> */}
        <section class="content" style={{ paddingTop: 100 }}>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <form method="post" action="https://clinkdelivery.com/admin/categories/save" enctype="multipart/form-data">
                  <input type="hidden" name="_token" value="hrxeTL0t5hnBVb8Q3Q4vTc42CXU88qyd320Luzkv"></input>
                  <div class="form-group">
                    <lable>Name</lable>
                    <input type="text" name="name" value={this.state.name} placeholder="john etc" required="" class="form-control" onChange={(e) => this.setState({ name: e.target.value })}></input>
                  </div>
                  <div class="form-group">
                    <lable>description</lable>
                    <textarea name="description" required="" value={this.state.description} class="form-control" onChange={(e) => this.setState({ description: e.target.value })} cols="6" rows="6"></textarea>
                  </div>
                  <div class="form-group">
                    <lable>Category Cover Image</lable>
                    <input type="file" class="input form-control" name="category_cover" accept="image/*" required="" onChange={(e) => this.setState({ coverimage: e.target.files[0] })} ></input>
                  </div>
                  <div class="form-group">
                    <lable>Category Bottle Image</lable>
                    <input type="file" class="input form-control" name="category_bottle" accept="image/*" required="" onChange={(e) => this.setState({ bottleimage: e.target.files[0] })}></input>
                  </div>
                  <button class="btn btn-success">Save</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )

  }
}
export default AddItem