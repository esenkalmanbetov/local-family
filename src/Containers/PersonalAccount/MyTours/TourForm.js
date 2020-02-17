import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import ImageUploader from "react-images-upload";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
    return (
      <div>
        {this.state.pictures.map((picture, idx) => {
          return (
            <div key={idx}>
              picture
              <img src={URL.createObjectURL(picture)} alt={"surot"} />
            </div>
          );
        })}
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          // imgExtension={['.jpg', '.gif', '.png', '.gif']}
          // maxFileSize={5242880}
        />
      </div>
    );
  }
}
class TourForm extends React.Component {
  state = {
    form: {
      Title: "",
      Place: "",
      Description: "",
      Id: 0
    }
  };

  componentDidMount() {
    this.initForm();
  }

  initForm = () => {
    let form = this.props.tour || this.state.form;
    this.setState({ form });
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    let form = this.state.form;
    if (form.Title && form.Place) {
      this.props.onSave(form);
      this.props.toggleForm();
    }
  };

  changeHandler = event => {
    let form = { ...this.state.form };
    form[event.target.name] = event.target.value;
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
                Title
              </label>
              <input
                value={form.Title}
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
            <MDBCol md="6" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Place
              </label>
              <input
                value={form.Place}
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
            <MDBCol md="12" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Description
              </label>
              <input
                value={form.Description}
                onChange={this.changeHandler}
                type="textArea"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="Description"
                placeholder="Description"
              />
            </MDBCol>
          </MDBRow>

          <ImageUpload />

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
