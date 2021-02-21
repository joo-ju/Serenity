import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class TopBar extends Component {
  render = () => (
    <div>
      <Link to="/">
        <h4 className="bg-primary mb-0 text-white text-center p-3">
          박현주 헤어클럽
        </h4>
      </Link>
    </div>
  );
}
