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

// import ImageCarousel from "./ImageCarousel";

const TourCard = ({ tour, onEdit, onDelete }) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <ImageCarousel Pictures={tour.Pictures} /> */}
        <MDBCardBody>
          <MDBCardTitle>{tour.tourName}</MDBCardTitle>
          <MDBCardTitle>{tour.duration}</MDBCardTitle>
          <MDBCardText>{tour.price}</MDBCardText>
          {/* <MDBCardText>{tour.categories}</MDBCardText> */}
          <MDBCardText>{tour.description}</MDBCardText>
          <MDBBtn onClick={() => onEdit(tour.id)}>Edit</MDBBtn>
          <MDBBtn onClick={() => onDelete(tour.id)}>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default TourCard;
