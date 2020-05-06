import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import ImageUpload from "../../../Components/ImageUpload";
import config from "../../../config/config";

class FamilyForm extends React.Component {
  state = {
    form: {
      familyName: "",
      location: "",
      phoneNumber: null,
      whatsapp: null,
      description: "",
      images: [],
      gallery: [],
    },
  };

  componentDidMount() {
    this.initForm();
  }

  initForm = () => {
    let form;
    if (this.props.isNew) form = { ...this.state.form };
    else {
      form = { ...this.props.family };
      form.gallery = [];
    }
    this.setState({ form });
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
    form.gallery = form.gallery.concat(pictures);
    form.images = form.images.concat(pictures);
    this.setState({ form });
  };

  deleteAllImages = () => {
    const familyId = this.state.form.id;
    this.props.deleteFamilyImages(familyId);
  };

  get decodedPictures() {
    return this.state.form.images.map((picture) =>
      picture.id
        ? config.apiUrl + "/" + picture.pathName
        : URL.createObjectURL(picture)
    );
  }

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

          <h3>Gallery</h3>
          {!this.props.isNew && (
            <button type="button" onClick={() => this.deleteAllImages()}>
              delete all images
            </button>
          )}
          {this.decodedPictures.map((picture, idx) => {
            return (
              <div key={idx}>
                <img src={picture} alt="surot" style={{ width: "100%" }} />
              </div>
            );
          })}

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
