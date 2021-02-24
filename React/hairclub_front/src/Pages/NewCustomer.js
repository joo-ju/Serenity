// import React from "react";
import React, { Component } from "react";
import CustomerSearch from "../Components/CustomerSearch.js";
import EnrollCustomer from "../Components/EnrollCustomer.js";
export default class NewCustomer extends Component {
  render = () => (
    <div className="  p-2">
      <div class="row">
        <CustomerSearch />

        <EnrollCustomer />

        {/* <EnrollReservation /> */}
      </div>
    </div>
  );
}

// export default Reservation;
