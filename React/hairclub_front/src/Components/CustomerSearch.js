import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../resources/vendor/fontawesome-free/css/all.min.css";
// import "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i";
import "../resources/css/sb-admin-2.min.css";
import "../resources/vendor/datatables/dataTables.bootstrap4.min.css";
// import useScript from "hooks/useScript";
// import script from "react-script-tag";

import { Helmet } from "react-helmet";

// <script src="../resources/vendor/jquery/jquery.min.js"></script>
//       <script src="../resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

//       {/* <!-- Core plugin JavaScript--> */}
//       <script src="../resources/vendor/jquery-easing/jquery.easing.min.js"></script>
//       {/*
//     <!-- Custom scripts for all pages--> */}
//       <script src="j../resources/s/sb-admin-2.min.js"></script>

//       {/* <!-- Page level plugins --> */}
//       <script src="../resources/vendor/datatables/jquery.dataTables.min.js"></script>
//       <script src="../resources/vendor/datatables/dataTables.bootstrap4.min.js"></script>

//       {/* <!-- Page level custom scripts --> */}
//       <script src="../resources/js/demo/datatables-demo.js"></script>

// const MyComponent = (props) => {
//   useScript("../resources/vendor/jquery/jquery.min.js");
//   useScript("../resources/vendor/bootstrap/js/bootstrap.bundle.min.js");
//   useScript("../resources/vendor/jquery-easing/jquery.easing.min.js");
//   useScript("../resources/js/sb-admin-2.min.js");
//   useScript("../resources/vendor/datatables/jquery.dataTables.min.js");
//   useScript("../resources/vendor/datatables/dataTables.bootstrap4.min.js");
//   useScript("../resources/js/demo/datatables-demo.js");
//   useScript();
//   useScript();
//   // rest of your component
// };

export default class CustomerSearch extends Component {
  render = () => (
    // <div className="  float-left">
    //   {/* <div class="row"> */}
    <div class="col-lg-4 h-auto">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <h5 class="m-0 font-weight-bold text-primary float-left pt-2 mr-4">
              고객 검색
            </h5>
            <div class="input-group">
              <input
                type="text"
                class="form-control white border-0 small"
                placeholder="번호 뒷4자리"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Start Date</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>김주희</td>
                  <td>010-0000-0000</td>
                  <td>2011/04/25</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>홍길동</td>
                  <td>010-0000-0000</td>
                  <td>2011/07/25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="../resources/vendor/jquery/jquery.min.js"></script>
        <script src="../resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        {/* <!-- Core plugin JavaScript--> */}
        <script src="../resources/vendor/jquery-easing/jquery.easing.min.js"></script>
        {/* 
    <!-- Custom scripts for all pages--> */}
        <script src="j../resources/s/sb-admin-2.min.js"></script>

        {/* <!-- Page level plugins --> */}
        <script src="../resources/vendor/datatables/jquery.dataTables.min.js"></script>
        <script src="../resources/vendor/datatables/dataTables.bootstrap4.min.js"></script>

        {/* <!-- Page level custom scripts --> */}
        <script src="../resources/js/demo/datatables-demo.js"></script>
      </Helmet>
    </div>
  );
}
