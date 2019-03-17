import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="container top ">
    <h1 className="title-text  text-center">welcome to passenger app</h1>
    <h6 className="text-center list-pass mb-4">
      To view all passengers click the button bellow
    </h6>
    <div className="row">
      <div className="col-md-2 mx-auto">
        <Link to="/passengers">
          <button className="btn btn-md">Passengers list</button>
        </Link>
      </div>
    </div>
  </div>
);
