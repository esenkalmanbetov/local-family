import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Select from "react-select";
import ImageUploader from "react-images-upload";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    const newPictures = pictureFiles.map(picture =>
      URL.createObjectURL(picture)
    );
    let Pictures = [...this.state.Pictures];
    Pictures = Pictures.concat(newPictures);

    this.setState({ Pictures });
    this.props.onUpload(Pictures);
  }

  render() {
    return (
      <div>
        <h3>Gallery</h3>
        {this.state.Pictures.map((picture, idx) => {
          return (
            <div key={idx}>
              <img src={picture} alt="surot" />
            </div>
          );
        })}
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
        />
      </div>
    );
  }
}

const categoryOptions = [
  { value: "trekking", label: "Trekking" },
  { value: "horseRiding", label: "Horse Riding" },
  { value: "cycling", label: "Cycling" }
];
class TourForm extends React.Component {
  state = {
    form: {
      id: 0,
      tourName: "",
      duration: null,
      price: null,
      categories: [],
      description: "",
      gallery: []
    }
  };

  componentDidMount() {
    this.initForm();
  }

  initForm = () => {
    this.setState({ form: this.props.tour || this.state.form });
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
    console.log(form);
  };

  onUpload = pictures => {
    let form = { ...this.state.form };
    form.gallery = pictures;
    this.setState({ form });
  };

  onSelectCategories = selectedCategories => {
    let form = { ...this.state.form };
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
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Name of Tour
              </label>
              <input
                value={form.tourName}
                name="tourName"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Duration
              </label>
              <input
                value={form.duration}
                name="duration"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="duration"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Price
              </label>
              <input
                value={form.price}
                name="price"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="price"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Categories
              </label>
              <Select
                value={form.categories}
                onChange={this.onSelectCategories}
                options={categoryOptions}
                isMulti
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

export default TourForm;
