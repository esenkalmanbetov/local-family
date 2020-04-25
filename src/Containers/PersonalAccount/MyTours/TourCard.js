import React from "react";

import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import Place1 from "../../../assets/img/place/1.png";

const TourCard = ({ tour, onEdit, onDelete, url }) => {
  return (
    <div class="single_place">
      <div class="thumb">
        <img src={Place1} alt="" />
        <Link to={`${url}/tourId`} class="prise">
          ${tour.price}
        </Link>
      </div>
      <div class="place_info">
        <Link to={`${url}/tourId`}>
          <h3>{tour.title}</h3>
        </Link>
        {/* <p>Ysyk kol Region, Kyrgyzstan</p> */}
        <div class="rating_days d-flex justify-content-between">
          <span class="d-flex justify-content-center align-items-center">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <Link to={`${url}/tourId`}>(20 Review)</Link>
          </span>
          <div class="days">
            <i class="fa fa-clock-o"></i>
            <Link to={`${url}/tourId`}>{tour.duration} Days</Link>
          </div>
        </div>
      </div>
      <Button onClick={() => onEdit(tour.id)}>Edit</Button>
      <Button
        className="ml-4"
        variant="danger"
        onClick={() => onDelete(tour.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TourCard;
