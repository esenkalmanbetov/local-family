import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

const TourCard = ({ tour, onEdit }) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{tour.Title}</MDBCardTitle>
          <MDBCardTitle>{tour.Place}</MDBCardTitle>
          <MDBCardText>{tour.Description}</MDBCardText>
          <MDBBtn onClick={() => onEdit(tour.Id)}>Edit</MDBBtn>
          <MDBBtn>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default TourCard;
