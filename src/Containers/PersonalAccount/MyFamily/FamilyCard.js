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

const FamilyCard = ({ family, onEdit, onDelete }) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        {/* <ImageCarousel Pictures={family.Pictures} /> */}
        <MDBCardBody>
          <MDBCardTitle>{family.familyName}</MDBCardTitle>
          <MDBCardTitle>{family.location}</MDBCardTitle>
          <MDBCardText>{family.phoneNumber}</MDBCardText>
          <MDBCardText>{family.whatsapp}</MDBCardText>
          {/* <MDBCardText>{family.categories}</MDBCardText> */}
          <MDBCardText>{family.description}</MDBCardText>
          <MDBBtn onClick={() => onEdit(family.id)}>Edit</MDBBtn>
          <MDBBtn onClick={() => onDelete(family.id)}>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default FamilyCard;
