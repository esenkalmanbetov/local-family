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
    },
  };

  componentDidMount() {
    this.initForm();
  }

  initForm = () => {
    this.setState({ form: this.props.family || this.state.form });
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    let form = this.state.form;
    if (event.currentTarget.checkValidity()) {
      this.props.onSave(form);
    }
  };

  changeHandler = (event) => {
    let form = { ...this.state.form };
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  onUpload = (pictures) => {
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
              <label className="grey-text">Family Name</label>
              <input
                value={form.familyName}
                name="familyName"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder="Family Name"
                required
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Location</label>
              <input
                value={form.location}
                name="location"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder="location"
                required
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Phone Number</label>
              <input
                value={form.phoneNumber}
                name="phoneNumber"
                onChange={this.changeHandler}
                type="number"
                className="form-control"
                placeholder="phoneNumber"
                required
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">WhatsApp</label>
              <input
                value={form.whatsapp}
                name="whatsapp"
                onChange={this.changeHandler}
                type="number"
                className="form-control"
                placeholder="whatsapp"
                required
              />
            </MDBCol>
            <MDBCol md="12" className="mb-3">
              <label className="grey-text">Description</label>
              <textarea
                value={form.description}
                onChange={this.changeHandler}
                type="textArea"
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
          <MDBBtn
            onClick={this.props.toggleForm}
            color="primary"
            type="button"
            className="ml-4"
          >
            Cancel
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default FamilyForm;
