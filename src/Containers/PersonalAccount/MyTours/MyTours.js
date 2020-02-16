import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

import TourForm from "./TourForm";
import TourCard from "./TourCard";

class MyTours extends Component {
  state = {
    isTourFormOpen: -1,
    tourList: []
  };

  componentDidMount() {
    this.initTourList();
  }

  initTourList = () => {
    let tourList = JSON.parse(localStorage.getItem("tourList"));
    this.setState({ tourList });
  };

  toggleTourForm = (isTourFormOpen = -1) => {
    if (isTourFormOpen === this.state.isTourFormOpen) {
      this.setState({ isTourFormOpen: -1 });
      return;
    }
    this.setState({ isTourFormOpen });
  };

  createTour = form => {
    let tourList = [...this.state.tourList];
    if (!tourList.length) form.Id = 1;
    else form.Id = tourList[tourList.length - 1].Id + 1;
    tourList.push(form);
    localStorage.setItem("tourList", JSON.stringify(tourList));
    this.setState({ tourList });
  };

  editTour = form => {
    let tourList = [...this.state.tourList];
    tourList.forEach(tour => {
      if (form.Id === tour.Id) for (let key in tour) tour[key] = form[key];
    });
    this.setState({ tourList });
  };

  render() {
    const {
      state: { isTourFormOpen, tourList }
    } = this;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol xl="5" md="4" className="mb-3 text-center">
            My Tours
          </MDBCol>
          <MDBCol>
            <MDBBtn onClick={() => this.toggleTourForm(0)}>Add Tour</MDBBtn>
            {isTourFormOpen === 0 ? (
              <TourForm
                onSave={this.createTour}
                toggleForm={this.toggleTourForm}
              />
            ) : null}
            {tourList.map((tour, idx) => {
              return (
                <div key={tour.Id}>
                  {isTourFormOpen === tour.Id ? (
                    <TourForm
                      tour={tour}
                      onSave={this.editTour}
                      toggleForm={this.toggleTourForm}
                    />
                  ) : (
                    <TourCard tour={tour} onEdit={this.toggleTourForm} />
                  )}
                </div>
              );
            })}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MyTours;
