import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TourModel from "../models/TourModel";
function TourList(props) {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    TourModel.getAll()
      .then((res) => {
        setTours(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tour List</h1>
      <a href="deploy_react/tours/create">Add</a>
      <table border={1} width={800} style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={index}>
              <th>{tour.id}</th>
              <th>
                {" "}
                <Link to={`/deploy_react/tours/${tour.id}`}>{tour.name}</Link>
              </th>
              <th>{tour.price}</th>
              <th>
                <Link to={`/deploy_react/tours/${tour.id}/edit`}>Edit</Link>|
                <Link to={`/deploy_react/tours/${tour.id}/delete`}>Delete</Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TourList;
