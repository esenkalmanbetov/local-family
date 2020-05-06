import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

import TourForm from "./TourForm";
import TourCard from "./TourCard";

import "./MyTours.scss";

class MyTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTourFormOpen: -1,
    };
  }

  componentDidMount() {
    this.startInterval();
  }

  get userId() {
    return this.props.stores.authStore.user().id;
  }

  get tours() {
    return this.props.stores.tourStore.tours();
  }

  loadTours = (userId) => {
    this.props.stores.tourStore.loadTours(userId);
  };

  startInterval = () => {
    this.interval = setInterval(() => {
      if (this.userId) {
        this.loadTours(this.userId);
        clearInterval(this.interval);
      }
    }, 100);
  };

  toggleTourForm = (isTourFormOpen = -1) => {
    if (isTourFormOpen === this.state.isTourFormOpen) {
      this.setState({ isTourFormOpen: -1 });
      return;
    }
    this.setState({ isTourFormOpen });
  };

  createTour = (form) => {
    form.userId = this.userId;

    let formData = new FormData();

    const { gallery, ...restForm } = form;

    for (let key in restForm) {
      formData.append(key, restForm[key]);
    }
    gallery.forEach((image) => {
      formData.append("images", image);
    });
    this.props.stores.tourStore.createTour(formData).then(() => {
      this.toggleTourForm();
      this.loadTours(this.userId);
    });
  };

  editTour = (form) => {
    let formData = new FormData();

    const { gallery, ...restForm } = form;

    for (let key in restForm) {
      formData.append(key, restForm[key]);
    }
    gallery.forEach((image) => {
      formData.append("images", image);
    });
    this.props.stores.tourStore.updateTour(formData).then(() => {
      this.toggleTourForm();
      this.loadTours(this.userId);
    });
  };

  deleteTour = (tourId) => {
    this.props.stores.tourStore.deleteTour(tourId).then(() => {
      this.loadTours(this.userId);
    });
  };

  deleteAllImages = (tourId) => {
    this.props.stores.tourStore.deleteTourImages(tourId).then(() => {
      this.loadTours(this.userId);
      this.toggleTourForm();
    });
  };

  render() {
    const {
      state: { isTourFormOpen },
      props: {
        match: { url },
      },
    } = this;

    return (
      <MDBContainer className="personal-tours">
        <MDBRow>
          <MDBCol xl="5" md="4" className="mb-3 text-center">
            My Tours
          </MDBCol>
          <MDBCol>
            <MDBBtn onClick={() => this.toggleTourForm(0)}>Add Tour</MDBBtn>
            {isTourFormOpen === 0 && (
              <TourForm onSave={this.createTour} isNew />
            )}
            <div class="popular_places_area">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="row">
                    {this.tours.map((tour, idx) => (
                      <div>
                        {isTourFormOpen === tour.id ? (
                          <TourForm
                            tour={tour}
                            onSave={this.editTour}
                            deleteTourImages={this.deleteAllImages}
                            toggleForm={this.toggleTourForm}
                          />
                        ) : (
                          <TourCard
                            key={idx}
                            url={url}
                            tour={tour}
                            onEdit={this.toggleTourForm}
                            onDelete={this.deleteTour}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default inject("stores")(observer(MyTours));
