// import React from "react";
import React, { Component } from "react";
import CustomerSearch from "../Components/CustomerSearch.js";
import EnrollReservation from "../Components/EnrollReservation.js";
export default class Reservation extends Component {
  render = () => (
    <div className="  p-2">
      <div class="row">
        <CustomerSearch />
        {/* <div class="col-lg-9">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary"></h6>
          </div>
          <div class="card-body">
            The styling for this basic card example is created by using default
            Bootstrap utility classes. By using utility classes, the style of
            the card component can be easily modified with no need for any
            custom CSS!
          </div>
        </div> */}
        <EnrollReservation />
      </div>

      {/* <div class="col-lg-3">
          <div class="card shadow mb-4">
            <a
              href="#collapseCardExample"
              class="d-block card-header py-3"
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="collapseCardExample"
            >
              <h6 class="m-0 font-weight-bold text-primary">
                Collapsable Card Example
              </h6>
            </a>
            <div class="collapse show" id="collapseCardExample">
              <div class="card-body">
                This is a collapsable card example using Bootstrap's built in
                collapse functionality.{" "}
                <strong>Click on the card header</strong> to see the card body
                collapse and expand!
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
}

// export default Reservation;
