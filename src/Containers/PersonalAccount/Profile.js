import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import Select from "react-select";
import { observer, inject } from "mobx-react";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userForm: this.props.user,
    };
  }

  componentDidMount() {
    this.initState();
  }

  componentDidUpdate() {}

  get countries() {
    return this.props.stores.authStore.countries();
  }

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const form = event.currentTarget;
    if (form.checkValidity()) {
      this.props.stores.authStore.updateUserInfo(this.state.userForm);
    }
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    let userForm = { ...this.state.userForm };
    userForm[name] = value;
    this.setState({ userForm });
  };

  initState = () => {
    let userForm = { ...this.state.userForm };
    let region = {},
      regionOptions = [];
    const serviceCountriesId = userForm.serviceCountries.map(
      (country) => country.id
    );
    if (userForm.role === "host") {
      regionOptions = userForm.country.regions;
      region = regionOptions.find((region) => region.id === userForm.regionId);
    }

    userForm.serviceCountriesId = serviceCountriesId;

    this.setState({ userForm, region, regionOptions });
  };

  onServiceCountriesSelect = (selectedCountries) => {
    let userForm = { ...this.state.userForm };
    let serviceCountriesId = [];
    if (selectedCountries && selectedCountries.length)
      serviceCountriesId = selectedCountries.map((country) => country.id);
    userForm.serviceCountriesId = serviceCountriesId;
    this.setState({ userForm });
  };

  onCountrySelect = (selectedCountry) => {
    let userForm = this.state.userForm;
    if (selectedCountry.id === userForm.countryId) return;
    userForm.countryId = selectedCountry.id;
    userForm.regionId = null;

    this.setState({
      userForm,
      regionOptions: selectedCountry.regions,
      region: {},
    });
  };

  onRegionSelect = (selectedRegion) => {
    let userForm = this.state.userForm;
    userForm.regionId = selectedRegion.id;
    this.setState({ userForm, region: selectedRegion });
  };

  render() {
    const { userForm, regionOptions, region } = this.state;
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label className="grey-text">First name</label>
              <input
                value={userForm.firstName}
                name="firstName"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder="First name"
                required
              />
              {/* <div className="valid-feedback">Looks good!</div> */}
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label className="grey-text">Last name</label>
              <input
                value={userForm.lastName}
                name="lastName"
                onChange={this.changeHandler}
                type="text"
                className="form-control"
                placeholder="Last name"
                required
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label className="grey-text">Email</label>
              <input
                value={userForm.email}
                onChange={this.changeHandler}
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                disabled
              />
            </MDBCol>
          </MDBRow>
          {userForm.role === "tourist" && (
            <MDBRow>
              <MDBCol>
                <label className="grey-text">Residence</label>
                <input
                  value={userForm.residence}
                  onChange={this.changeHandler}
                  type="text"
                  className="form-control"
                  name="residence"
                  placeholder="Residence"
                  required
                />
              </MDBCol>
            </MDBRow>
          )}
          {userForm.role === "guide" && (
            <MDBRow>
              <MDBCol className="mb-3">
                <label className="grey-text">Service Countries</label>
                <Select
                  onChange={this.onServiceCountriesSelect}
                  options={this.countries}
                  defaultValue={userForm.serviceCountries}
                  getOptionLabel={({ title }) => title}
                  getOptionValue={({ id }) => id}
                  isMulti
                  required
                />
              </MDBCol>
            </MDBRow>
          )}
          {userForm.role === "host" && (
            <MDBRow>
              <MDBCol md="6" className="mb-3">
                <label className="grey-text">Country</label>
                <Select
                  options={this.countries}
                  onChange={this.onCountrySelect}
                  defaultValue={userForm.country}
                  getOptionLabel={({ title }) => title}
                  getOptionValue={({ id }) => id}
                  required
                />
              </MDBCol>

              <MDBCol md="6" className="mb-3">
                <label className="grey-text">Region</label>
                <Select
                  options={regionOptions}
                  value={region}
                  onChange={this.onRegionSelect}
                  getOptionLabel={({ title }) => title}
                  getOptionValue={({ id }) => id}
                  noOptionsMessage={() => "Please select a country"}
                  required
                />
              </MDBCol>
            </MDBRow>
          )}
          <MDBBtn color="primary" type="submit" className="m-4">
            Save
          </MDBBtn>
        </form>
      </div>
    );
  }
}

class Profile extends Component {
  get user() {
    return this.props.stores.authStore.user();
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol xl="5" md="4" className="mb-3 text-center">
            <img
              src="https://bestindiandeals.net/wp-content/uploads/2018/06/cool-profile-picture-300x219.jpg"
              className="img-fluid z-depth-1 rounded-circle"
              alt=""
            />
          </MDBCol>
          <MDBCol>{this.user.id && <ProfileForm user={this.user} />}</MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

ProfileForm = inject("stores")(observer(ProfileForm));
export default inject("stores")(observer(Profile));
