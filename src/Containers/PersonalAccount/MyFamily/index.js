import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

import FamilyForm from "./FamilyForm";
import FamilyCard from "./FamilyCard";

class MyFamilies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFamilyFormOpen: -1,
      familyList: []
    };
  }

  componentDidMount() {
    this.initFamilyList();
  }

  initFamilyList = () => {
    let familyList = JSON.parse(localStorage.getItem("familyList"));
    familyList && this.setState({ familyList });
  };

  toggleFamilyForm = (isFamilyFormOpen = -1) => {
    if (isFamilyFormOpen === this.state.isFamilyFormOpen) {
      this.setState({ isFamilyFormOpen: -1 });
      return;
    }
    this.setState({ isFamilyFormOpen });
  };

  createFamily = form => {
    let familyList = [...this.state.familyList];
    if (!familyList.length) form.id = 1;
    else form.id = familyList[familyList.length - 1].id + 1;
    familyList.push(form);
    localStorage.setItem("familyList", JSON.stringify(familyList));
    this.setState({ familyList });
  };

  editFamily = form => {
    let familyList = [...this.state.familyList];
    familyList.forEach(family => {
      if (form.id === family.id)
        for (let key in family) family[key] = form[key];
    });
    localStorage.setItem("familyList", JSON.stringify(familyList));
    this.setState({ familyList });
  };

  deleteFamily = id => {
    let familyList = [...this.state.familyList];
    const deleteIdx = familyList.findIndex(family => family.id === id);
    familyList.splice(deleteIdx, 1);
    this.setState({ familyList });
    localStorage.setItem("familyList", JSON.stringify(familyList));
  };

  render() {
    const {
      state: { isFamilyFormOpen, familyList }
    } = this;

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol xl="5" md="4" className="mb-3 text-center">
            My Familes
          </MDBCol>
          <MDBCol>
            <MDBBtn onClick={() => this.toggleFamilyForm(0)}>Add Family</MDBBtn>
            {isFamilyFormOpen === 0 ? (
              <FamilyForm
                onSave={this.createFamily}
                toggleForm={this.toggleFamilyForm}
              />
            ) : null}
            {familyList.map(family => {
              return (
                <div key={family.id}>
                  {isFamilyFormOpen === family.id ? (
                    <FamilyForm
                      family={family}
                      onSave={this.editFamily}
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MyFamilies;
