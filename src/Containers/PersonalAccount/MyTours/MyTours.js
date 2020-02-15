import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

import TourForm from "./TourForm";
import TourCard from "./TourCard";

class MyTours extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol xl="5" md="4" className="mb-3 text-center">
            My Tours
          </MDBCol>
          <MDBCol>
            <MDBBtn>Add Tour</MDBBtn>
            <TourForm />
            <TourCard />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MyTours;
