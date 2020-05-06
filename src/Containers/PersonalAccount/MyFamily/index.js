import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import { observer, inject } from "mobx-react";

import FamilyForm from "./FamilyForm";
import FamilyCard from "./FamilyCard";

import "./MyHomes.scss";

class MyFamilies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFamilyFormOpen: -1,
    };
  }

  get userId() {
    return this.props.stores.authStore.user().id;
  }

  get families() {
    return this.props.stores.familyStore.families();
  }

  componentDidMount() {
    this.startInterval();
  }

  startInterval = () => {
    this.interval = setInterval(() => {
      if (this.userId) {
        this.loadFamilies(this.userId);
        clearInterval(this.interval);
      }
    }, 100);
  };

  loadFamilies = (userId) => {
    this.props.stores.familyStore.loadFamilies(userId);
  };

  toggleFamilyForm = (isFamilyFormOpen = -1) => {
    if (isFamilyFormOpen === this.state.isFamilyFormOpen) {
      this.setState({ isFamilyFormOpen: -1 });
      return;
    }
    this.setState({ isFamilyFormOpen });
  };

  createFamily = (form) => {
    form.userId = this.userId;
    let formData = new FormData();

    const { gallery, ...restForm } = form;

    for (let key in restForm) {
      formData.append(key, restForm[key]);
    }
    gallery.forEach((image) => {
      formData.append("images", image);
    });
    this.props.stores.familyStore.createFamily(formData).then(() => {
      this.toggleFamilyForm();
      this.loadFamilies(this.userId);
    });
  };

  editFamily = (form) => {
    let formData = new FormData();

    const { gallery, ...restForm } = form;

    for (let key in restForm) {
      formData.append(key, restForm[key]);
    }
    gallery.forEach((image) => {
      formData.append("images", image);
    });
    this.props.stores.familyStore.editFamily(formData).then(() => {
      this.toggleFamilyForm();
      this.loadFamilies(this.userId);
    });
  };

  deleteFamily = (familyId) => {
    this.props.stores.familyStore.deleteFamily(familyId).then(() => {
      this.loadFamilies(this.userId);
    });
  };

  deleteAllImages = (familyId) => {
    this.props.stores.familyStore.deleteFamilyImages(familyId).then(() => {
      this.loadFamilies(this.userId);
      this.toggleFamilyForm();
    });
  };

  render() {
    const {
      state: { isFamilyFormOpen },
    } = this;

    return (
      <MDBContainer className="my-homes">
        <MDBRow>
          <MDBCol xl="5" md="4" className="mb-3 text-center">
            My homes
          </MDBCol>
          <MDBCol>
            <MDBBtn onClick={() => this.toggleFamilyForm(0)}>Add home</MDBBtn>
            {isFamilyFormOpen === 0 && (
              <FamilyForm
                onSave={this.createFamily}
                toggleForm={this.toggleFamilyForm}
                isNew
              />
            )}

            <div class="popular_places_area">
              <div class="container">
                <div class="row">
                  {this.families.map((family) => {
                    return (
                      <div key={family.id}>
                        {isFamilyFormOpen === family.id ? (
                          <FamilyForm
                            family={family}
                            onSave={this.editFamily}
                            deleteFamilyImages={this.deleteAllImages}
                            toggleForm={this.toggleFamilyForm}
                          />
                        ) : (
                          <FamilyCard
                            family={family}
                            onEdit={this.toggleFamilyForm}
                            onDelete={this.deleteFamily}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default inject("stores")(observer(MyFamilies));
