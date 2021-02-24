import React, { Component } from "react";
import '../adminlte.min.css'
import '../dataTables.bootstrap4.min.css'
import '../responsive.bootstrap4.min.css'
import IconAlerts from './Alert'
import '../index.css'
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';

  class AddItem extends React.Component {
    state = {
      name: "",
      description: "etc",
      coverimage: "cover",
      catgoryimg: "image",
      lert: false,
    }
    formhandler = (e) => {

      this.setState({ lert: true })
      e.prevent.Default()

    }
    render() {
      console.log(this.state);

      return (
        <div className="dashboard">
          {
            this.state.lert === true ? <div style={{ position: 'absolute' }}>
              <div>
                <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>
              </div>
            </div> : ""
          }
          <section class="content" style={{ paddingTop: 100 }}>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <form onSubmit={this.formhandler} >
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
                      <lable>Category Image</lable>
                      <input type="file" class="input form-control" name="category_bottle" accept="image/*" required="" onChange={(e) => this.setState({ catgoryimg: e.target.files[0] })}></input>
                    </div>
                    <button type="submit" onSubmit={(e) => e.preventDefault()} class="btn btn-success">Save</button>
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