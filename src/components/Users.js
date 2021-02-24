import React, { Component } from "react";
import '../adminlte.min.css'
import '../dataTables.bootstrap4.min.css'
import ResponsiveDrawer from './ResponsiveDrawer'
import AddItem from './AddItem'
import '../responsive.bootstrap4.min.css'
import '../index.css'

class User extends React.Component {

    render() {
        console.log(this.state);

        return (
            <div className="dashboard" style={{ paddingTop: 100 }}>
                <ResponsiveDrawer />
                <section class="content">

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <tfooter>
                                </tfooter>
                                <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div class="row"><div class="col-sm-12 col-md-6">
                                        <div class="dataTables_length" id="example1_length">
                                            <label>Show <select name="example1_length" aria-controls="example1" class="custom-select custom-select-sm form-control form-control-sm">
                                                <option value="10">
                                                    10
                                        </option>
                                                <option value="25">
                                                    25
                                            </option>
                                                <option value="50">
                                                    50
                                                </option>
                                                <option value="100">
                                                    100
                                                    </option>
                                            </select>
                                                     entries
                                                     </label>
                                        </div>
                                    </div>
                                        <div class="col-sm-12 col-md-6">
                                            <div id="example1_filter" class="dataTables_filter">
                                                <label>Search:
                                                                 <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example1"></input>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table id="example1" class="table table-bordered table-hover dataTable no-footer dtr-inline" role="grid" aria-describedby="example1_info">
                                                <thead>
                                                    <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="No.: activate to sort column descending">No.</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending" >Email</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time: activate to sort column ascending" >Time</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Delete: activate to sort column ascending" >Delete</th></tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" class="odd">
                                                        <td tabindex="0" class="sorting_1">1</td>
                                                        <td>andreacchio@tiscali.it</td>
                                                        <td>
                                                            2021-02-17 10:25:47
                        </td>
                                                        <td >
                                                            <a href="https://clinkdelivery.com/admin/subscriber/delete/27" class="btn btn-danger">Delete</a></td>
                                                    </tr>
                                                    <tr role="row" class="even">
                                                        <td tabindex="0" class="sorting_1">10</td>
                                                        <td>mpatters2010@gmail.com</td>
                                                        <td>
                                                            2020-11-19 21:51:22
                        </td>
                                                        <td>
                                                            <a href="https://clinkdelivery.com/admin/subscriber/delete/18" class="btn btn-danger">Delete</a></td>
                                                    </tr></tbody>
                                                <tbody><tr>
                                                    <th>No.</th>
                                                    <th>Email</th>
                                                    <th>Time</th>
                                                    <th>Delete</th>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-5">
                                            <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">
                                                Showing 1 to 10 of 20 entries
                        </div>
                                        </div>
                                        <div class="col-sm-12 col-md-7">
                                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id="example1_previous">
                                                        <a href="https://clinkdelivery.com/admin/subscribers#" aria-controls="example1" data-dt-idx="0" tabindex="0" class="page-link">
                                                            Previous
                                            </a>
                                                    </li>
                                                    <li class="paginate_button page-item active">
                                                        <a href="https://clinkdelivery.com/admin/subscribers#" aria-controls="example1" data-dt-idx="1" tabindex="0" class="page-link">
                                                            1
                                                    </a>
                                                    </li>
                                                    <li class="paginate_button page-item ">
                                                        <a href="https://clinkdelivery.com/admin/subscribers#" aria-controls="example1" data-dt-idx="2" tabindex="0" class="page-link">
                                                            2
                                                            </a>
                                                    </li>
                                                    <li class="paginate_button page-item next" id="example1_next">
                                                        <a href="https://clinkdelivery.com/admin/subscribers#" aria-controls="example1" data-dt-idx="3" tabindex="0" class="page-link">
                                                            Next</a>
                                                    </li>


                                                </ul>
                                            </div>
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
export default User