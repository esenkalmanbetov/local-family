import React from "react";

import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import Place1 from "../../../assets/img/place/1.png";
import config from "../../../config/config";

const TourCard = ({ tour, onEdit, onDelete }) => {
  return (
    <div class="single_place">
      <div class="thumb">
        <img
          src={
            tour.images.length
              ? `${config.apiUrl}/${tour.images[0].pathName}`
              : Place1
          }
          alt=""
        />
        <Link class="prise">${tour.price}</Link>
      </div>
      <div class="place_info">
        <Link>
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
            <Link>(20 Review)</Link>
          </span>
          <div class="days">
            <i class="fa fa-clock-o"></i>
            <Link>{tour.duration} Days</Link>
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
