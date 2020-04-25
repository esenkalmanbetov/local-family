import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { observer, inject } from "mobx-react";
import Select from "react-select";

import ImageUpload from "../../../Components/ImageUpload";

class TourForm extends React.Component {
  state = {
    form: {
      title: "",
      duration: null,
      price: null,
      categoriesId: [],
      description: "",
      gallery: [],
    },
  };

  get categories() {
    return this.props.stores.tourStore.categories();
  }

  componentDidMount() {
    this.initForm();
    this.loadCategories();
  }

  loadCategories() {
    this.props.stores.tourStore.getCategories();
  }

  initForm = () => {
    let form = { ...this.props.tour } || { ...this.state.form };
    const categoriesId = form.categories.map((category) => category.id);
    form.categoriesId = categoriesId;
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
    form.gallery = pictures;
    this.setState({ form });
  };

  onSelectCategories = (selectedCategories) => {
    let form = { ...this.state.form };
    let categoriesId = [];
    if (selectedCategories && selectedCategories.length)
      categoriesId = selectedCategories.map((category) => category.id);
    form.categoriesId = categoriesId;
    form.categories = selectedCategories;
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
              <label className="grey-text">Name of Tour</label>
              <input
                value={form.title}
                name="title"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Duration</label>
              <input
                value={form.duration}
                name="duration"
                onChange={this.changeHandler}
                type="number"
                className="form-control"
                placeholder="duration"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Price</label>
              <input
                value={form.price}
                name="price"
                onChange={this.changeHandler}
                type="number"
                className="form-control"
                placeholder="price"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Categories</label>
              <Select
                value={form.categories}
                onChange={this.onSelectCategories}
                options={this.categories}
                getOptionLabel={({ title }) => title}
                getOptionValue={({ id }) => id}
                isMulti
              />
              <div className="valid-feedback">Looks good!</div>
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

export default inject("stores")(observer(TourForm));
