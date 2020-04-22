import React from "react";
import Select from "react-select";
import { observer, inject } from "mobx-react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";

import "./Auth.scss";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      isUserAgree: false,
      regionOptions: [],
      userForm: {
        role: "tourist",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
        residence: "",
        serviceCountriesId: [],
        countryId: null,
        regionId: null,
      },
    };
  }

  get countries() {
    return this.props.stores.authStore.countries;
  }

  componentDidMount() {
    this.loadCountries();
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    let userForm = this.state.userForm;
    if (form.checkValidity()) {
      this.props.stores.authStore.signup(userForm).then(
        (resp) => {
          this.props.history.push("/");
        },
        (err) => {
          console.log("error: ", err);
        }
      );
    }

    this.setState({ validated: true });
    event.preventDefault();
  };

  onUserFormChange = (e) => {
    let userForm = this.state.userForm;
    const { name, value } = e.target;
    userForm[name] = value;
    this.setState({ userForm });
  };

  onCountrySelect = (selectedCountry) => {
    let userForm = this.state.userForm;
    userForm.countryId = selectedCountry.id;

    this.setState({
      userForm,
      regionOptions: selectedCountry.regions,
    });
  };

  onRegionSelect = (selectedRegion) => {
    let userForm = this.state.userForm;
    userForm.regionId = selectedRegion.id;
    this.setState({ userForm });
  };

  onServiceCountriesSelect = (selectedCountries) => {
    const serviceCountriesId = selectedCountries.map((country) => country.id);
    let userForm = this.state.userForm;
    userForm.serviceCountriesId = serviceCountriesId;
    this.setState({ userForm });
  };

  toggleAgreement = () => {
    this.setState({ isUserAgree: !this.state.isUserAgree });
  };

  loadCountries() {
    this.props.stores.authStore.getCountries();
  }

  render() {
    const {
      state: { validated, userForm, isUserAgree, regionOptions },
      handleSubmit,
      onUserFormChange,
      onCountrySelect,
      onRegionSelect,
      onServiceCountriesSelect,
      toggleAgreement,
    } = this;

    return (
      <div className="auth">
        <Col
          md={{ span: 6, offset: 3 }}
          lg={{ span: 4, offset: 4 }}
          xl={{ span: 4, offset: 4 }}
          sm={{ span: 6, offset: 3 }}
        >
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col}>
              <Form.Label>I'm </Form.Label>
              <Form.Check
                checked={userForm.role === "tourist"}
                type="radio"
                label="Tourist"
                value="tourist"
                name="role"
                onChange={onUserFormChange}
              />
              <Form.Check
                checked={userForm.role === "guide"}
                type="radio"
                label="Guide"
                value="guide"
                name="role"
                onChange={onUserFormChange}
              />
              <Form.Check
                checked={userForm.role === "host"}
                type="radio"
                label="Host"
                value="host"
                name="role"
                onChange={onUserFormChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  name="email"
                  value={userForm.email}
                  type="email"
                  placeholder="Email"
                  required
                  onChange={onUserFormChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
                value={userForm.firstName}
                onChange={onUserFormChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastName"
                value={userForm.lastName}
                onChange={onUserFormChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                value={userForm.password}
                onChange={onUserFormChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required
                name="passwordConfirm"
                value={userForm.passwordConfirm}
                onChange={onUserFormChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            {userForm.role === "tourist" && (
              <Form.Group as={Col}>
                <Form.Label>Residence</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Residence"
                  name="residence"
                  value={userForm.residence}
                  onChange={onUserFormChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            )}
            {userForm.role === "guide" && (
              <Form.Group as={Col}>
                <Form.Label>Service Countries</Form.Label>
                <Select
                  onChange={onServiceCountriesSelect}
                  options={this.countries}
                  getOptionLabel={({ title }) => title}
                  getOptionValue={({ id }) => id}
                  isMulti
                  required
                />
              </Form.Group>
            )}
            {userForm.role === "host" && (
              <>
                <Form.Group as={Col}>
                  <Form.Label>Country</Form.Label>
                  <Select
                    options={this.countries}
                    onChange={onCountrySelect}
                    getOptionLabel={({ title }) => title}
                    getOptionValue={({ id }) => id}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Region</Form.Label>
                  <Select
                    options={regionOptions}
                    onChange={onRegionSelect}
                    getOptionLabel={({ title }) => title}
                    getOptionValue={({ id }) => id}
                    noOptionsMessage={() => "Please select a country"}
                    required
                  />
                </Form.Group>
              </>
            )}
            <Form.Group as={Col}>links</Form.Group>
            <Form.Group as={Col}>
              <Form.Check
                required
                type="checkbox"
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                onChange={toggleAgreement}
              />
            </Form.Group>
            <Button
              className="genric-btn info medium circle c-w-120"
              type="submit"
              disabled={!isUserAgree}
              // onClick={handleSubmit}
            >
              Register
            </Button>
          </Form>
        </Col>
      </div>
    );
  }
}

export default inject("stores")(observer(Signup));
