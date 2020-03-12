import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

import TourForm from "./TourForm";
import TourCard from "./TourCard";

class MyTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTourFormOpen: -1,
      tourList: []
    };
  }

  componentDidMount() {
    this.initTourList();
  }

  initTourList = () => {
    let tourList = JSON.parse(localStorage.getItem("tourList"));
    tourList && this.setState({ tourList });
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
    if (!tourList.length) form.id = 1;
    else form.id = tourList[tourList.length - 1].id + 1;
    tourList.push(form);
    localStorage.setItem("tourList", JSON.stringify(tourList));
    this.setState({ tourList });
  };

  editTour = form => {
    let tourList = [...this.state.tourList];
    tourList.forEach(tour => {
      if (form.id === tour.id) for (let key in tour) tour[key] = form[key];
    });
    localStorage.setItem("tourList", JSON.stringify(tourList));
    this.setState({ tourList });
  };

  deleteTour = id => {
    let tourList = [...this.state.tourList];
    const deleteIdx = tourList.findIndex(tour => tour.id === id);
    tourList.splice(deleteIdx, 1);
    this.setState({ tourList });
    localStorage.setItem("tourList", JSON.stringify(tourList));
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
            {tourList.map(tour => {
              return (
                <div key={tour.id}>
                  {isTourFormOpen === tour.id ? (
                    <TourForm
                      tour={tour}
                      onSave={this.editTour}
                      toggleForm={this.toggleTourForm}
                    />
                  ) : (
                    <TourCard
                      tour={tour}
                      onEdit={this.toggleTourForm}
                      onDelete={this.deleteTour}
                    />
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
