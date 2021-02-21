import React, { Component } from "react";
import "../bootstrap.css";
import "./Calendar.css";
import moment from "moment";
class DateHeader extends Component {
  // 달력 header에 요일 표시하기
  dateToArray = (dates) => {
    if (Array.isArray(dates)) {
      return dates;
    } else if (typeof dates === "string") {
      return dates.split(",");
    } else {
      return ["일", "월", "화", "수", "목", "금", "토"];
    }
  };

  mapArrayToDate = (dateArray) => {
    try {
      if (dateArray.length !== 7) {
        console.log(new Error("dates props must be had 7 date"));
        dateArray = ["일", "월", "화", "수", "목", "금", "토"];
      }

      return dateArray.map((date, index) => {
        const className = () => {
          let className = "RCA-calendar-date-component";
          if (index === 0) {
            return className + " date-sun";
          } else if (index === 6) {
            return className + " date-sat";
          } else {
            return className + " date-weekday";
          }
        };
        return (
          <div className={className()} key={"RCA-header-" + date}>
            {date}
          </div>
        );
      });
    } catch {
      throw new Error("date must be string or component");
    }
  };

  render() {
    return (
      <div className="RCA-calendar-date-header">
        {this.mapArrayToDate(this.dateToArray(this.props.dates))}
      </div>
    );
  }
}

export default class Calendar extends Component {
  render() {
    return (
      <div className="  float-left">
        <div class="row">
          <div class="col-lg-9">
            {/* <!-- Basic Card Example --> */}
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Basic Cample</h6>
              </div>
              <div class="card-body">
                The styling for this basic card example is created by using
                default Bootstrap utility classes. By using utility classes, the
                style of the card component can be easily modified with no need
                for any custom CSS!
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            {/* <!-- Dropdown Card Example --> */}
            <div class="card shadow mb-4">
              {/* <!-- Card Header - Acc ordion --> */}
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
              {/* <!-- Card Content - Collapse --> */}
              <div class="collapse show" id="collapseCardExample">
                <div class="card-body">
                  This is a collapsable card example using Bootstrap's built in
                  collapse functionality.{" "}
                  <strong>Click on the card header</strong> to see the card body
                  collapse and expand!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
