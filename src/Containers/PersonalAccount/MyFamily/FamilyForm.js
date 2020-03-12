import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import ImageUpload from "../../../Components/ImageUpload";

class FamilyForm extends React.Component {
  state = {
    form: {
      id: 0,
      familyName: "",
      location: "",
      phoneNumber: null,
      whatsapp: null,
      description: "",
      gallery: []
    }
  };

  componentDidMount() {
    this.initForm();
  }

  initForm = () => {
    this.setState({ form: this.props.family || this.state.form });
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    let form = this.state.form;
    if (true) {
      this.props.onSave(form);
      this.props.toggleForm();
    }
  };

  changeHandler = event => {
    let form = { ...this.state.form };
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  onUpload = pictures => {
    let form = { ...this.state.form };
    form.gallery = pictures;
    this.setState({ form });
  };

  render() {
    const { form } = this.state;
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Family Name
              </label>
              <input
                value={form.familyName}
                name="familyName"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Family Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Location
              </label>
              <input
                value={form.location}
                name="location"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="location"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Phone Number
              </label>
              <input
                value={form.phoneNumber}
                name="phoneNumber"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="phoneNumber"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                WhatsApp
              </label>
              <input
                value={form.whatsapp}
                name="whatsapp"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="whatsapp"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Description
              </label>
              <textarea
                value={form.description}
                onChange={this.changeHandler}
                type="textArea"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="description"
                placeholder="Description"
              />
            </MDBCol>
          </MDBRow>

          <ImageUpload onUpload={this.onUpload} />

          <MDBBtn type="submit" color="success">
            Save
          </MDBBtn>
          <MDBBtn onClick={this.props.toggleForm} color="primary" type="button">
            Cancel
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default FamilyForm;
