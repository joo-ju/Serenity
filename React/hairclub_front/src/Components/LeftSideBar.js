import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LeftSideBar extends Component {
  render = () => (
    <div className="float-left">
      {/* <h4 className="bg-primary text-white text-center p-3">
                박현주 헤어클럽
            </h4> */}
      {/* <div className="left-sidebar bg-gray-300">
                    박현주 헤어클럽
                </div> */}
      <div id="wrapper he-100">
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          {/* <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                {/* <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> 
            </a> */}

          {/* <!-- Divider --> */}
          {/* <hr class="sidebar-divider"/> */}

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li class="nav-item active">
            <Link
              to="../Reservation"
              class="nav-link"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <span>고객 조회</span>
            </Link>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          <li class="nav-item active">
            <a
              class="nav-link"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <span>고객 등록</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          <li class="nav-item active">
            <a
              class="nav-link"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <span>예약 현황</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          <li class="nav-item active">
            <a
              class="nav-link"
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <span>신규 예약</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i class="fas fa-fw fa-wrench"></i>
              <span>고객 등록</span>
            </a>
            <div
              id="collapseUtilities"
              class="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Utilities:</h6>
                <a class="collapse-item" href="utilities-color.html">
                  Colors
                </a>
                <a class="collapse-item" href="utilities-border.html">
                  Borders
                </a>
                <a class="collapse-item" href="utilities-animation.html">
                  Animations
                </a>
                <a class="collapse-item" href="utilities-other.html">
                  Other
                </a>
              </div>
            </div>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div class="sidebar-heading">Addons</div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i class="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              class="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <a class="collapse-item" href="login.html">
                  Login
                </a>
                <a class="collapse-item" href="register.html">
                  Register
                </a>
                <a class="collapse-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <a class="collapse-item" href="404.html">
                  404 Page
                </a>
                <a class="collapse-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Charts --> */}
          <li class="nav-item">
            <a class="nav-link" href="charts.html">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Charts</span>
            </a>
          </li>

          {/* <!-- Nav Item - Tables --> */}
          <li class="nav-item">
            <a class="nav-link" href="tables.html">
              <i class="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider d-none d-md-block" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
      </div>

      {/* <div class="col-lg-6">
        <div class="card mb-4">
          <div class="card-header">Default Card Example</div>
          <div class="card-body">
            This card uses Bootstrap's default styling with no utility classes
            added. Global styles are the only things modifying the look and feel
            of this default card example.
          </div>
        </div>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              Basic Card Example
            </h6>
          </div>
          <div class="card-body">
            The styling for this basic card example is created by using default
            Bootstrap utility classes. By using utility classes, the style of
            the card component can be easily modified with no need for any
            custom CSS!
          </div>
        </div>
      </div> */}
    </div>
  );
}
