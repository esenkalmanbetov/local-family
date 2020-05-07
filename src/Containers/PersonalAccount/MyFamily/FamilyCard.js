import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import Place6 from "../../../assets/img/place/6.png";
import config from "../../../config/config";

const FamilyCard = ({ family, onEdit, onDelete }) => {
  return (
    <div class="single_place">
      <div class="thumb">
        <img
          src={
            family.images.length
              ? `${config.apiUrl}/${family.images[0].pathName}`
              : Place6
          }
          alt=""
        />
      </div>
      <div class="place_info">
        <Link>
          <h3>{family.familyName}</h3>
        </Link>
        <p>{family.location}</p>
        <div class="rating_days d-flex justify-content-between">
          <span class="d-flex justify-content-center align-items-center">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <Link>(20 Review)</Link>
          </span>
          {/* <div class="days">
            <i class="fa fa-clock-o"></i>
            <Link>5 Days</Link>
          </div> */}
        </div>
      </div>
      <Button onClick={() => onEdit(family.id)}>Edit</Button>
      <Button
        className="ml-4"
        variant="danger"
        onClick={() => onDelete(family.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default FamilyCard;
