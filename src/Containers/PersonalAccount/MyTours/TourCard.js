import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  // MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

import ImageCarousel from "./ImageCarousel";

const TourCard = ({ tour, onEdit, onDelete }) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <ImageCarousel Pictures={tour.Pictures} />
        <MDBCardBody>
          <MDBCardTitle>{tour.Title}</MDBCardTitle>
          <MDBCardTitle>{tour.Place}</MDBCardTitle>
          <MDBCardText>{tour.Description}</MDBCardText>
          <MDBBtn onClick={() => onEdit(tour.Id)}>Edit</MDBBtn>
          <MDBBtn onClick={() => onDelete(tour.Id)}>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default TourCard;
