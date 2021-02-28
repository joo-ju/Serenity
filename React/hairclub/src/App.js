import React, { Component } from "react";
import Calendar from "./Calendar/Calendar";
import Header from "./Calendar/Header";
import LeftSideBar from "./Components/LeftSideBar";
import TopBar from "./Components/TopBar";
import Reservation from "./Pages/Reservation";
import NewCustomer from "./Pages/NewCustomer";
import moment from "moment";
import "./bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomerList from "./Pages/CustomerList";
import NewReservation from "./Pages/NewReservation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => this.setState({ title: data.title }));
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="*" component={TopBar} />
          <Route path="*" component={LeftSideBar} />
          <Route path="/Reservation" component={Reservation} />
          <Route path="/NewCustomer" component={NewCustomer} />
          <Route path="/CustomerList" component={CustomerList} />
          <Route path="/NewReservation" component={NewReservation} />
        </Router>

        {/* <div class="d-flex flex-column b">
          <Calendar />
        </div> */}
      </div>
    );
  }
}

//  export default App;
