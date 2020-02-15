import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class TourForm extends React.Component {
  state = {
    Title: "Good tour",
    Place: "Sary Ozon",
    Description: "Very Good"
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Title
              </label>
              <input
                value={this.state.Title}
                name="Title"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Title"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Place
              </label>
              <input
                value={this.state.Place}
                name="Place"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Place"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Description
              </label>
              <input
                value={this.state.Description}
                onChange={this.changeHandler}
                type="textArea"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="Description"
                placeholder="Description"
              />
            </MDBCol>
          </MDBRow>
          
          <MDBBtn color="primary" type="submit" color="success">
            Save
          </MDBBtn>
          <MDBBtn color="primary" type="button">
            Cancel
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default TourForm;
