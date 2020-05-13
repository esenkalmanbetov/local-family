import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Button } from "react-bootstrap";

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

  get decodedPictures() {
    return this.state.form.images.map((picture) =>
      picture.id
        ? config.apiUrl + "/" + picture.pathName
        : URL.createObjectURL(picture)
    );
  }

  componentDidMount() {
    this.initForm();
  }

  initForm = () => {
    let form;
    if (this.props.isNew) form = { ...this.state.form };
    else {
      form = { ...this.props.family };
      form.gallery = [];
      form.images = [...this.props.family.images];
      form.deletedImagesIds = [];
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

  onDeleteImage = (idx) => {
    let form = { ...this.state.form };
    const deletedImage = form.images[idx];
    if (deletedImage.id) form.deletedImagesIds.push(deletedImage.id);
    else {
      const index = form.gallery.indexOf(deletedImage);
      form.gallery.splice(index, 1);
    }
    form.images.splice(idx, 1);

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

          <h3>Gallery</h3>
          {this.decodedPictures.map((picture, idx) => {
            return (
              <div key={idx}>
                <img src={picture} alt="surot" style={{ width: "100%" }} />
                <div className="justify-content-end d-flex mt-1">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => this.onDeleteImage(idx)}
                  >
                    delete
                  </Button>
                </div>
                <hr />
              </div>
            );
          })}

          <ImageUpload onUpload={this.onUpload} />

          <div className="mb-5">
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
          </div>
        </form>
      </div>
    );
  }
}

export default FamilyForm;
