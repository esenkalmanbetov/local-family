import React from "react";
import Select from "react-select";
import { Form, Col, Button, InputGroup } from "react-bootstrap";

import "./Auth.scss";

const countryOptions = [
  { value: "kg", label: "Kyrgyzstan" },
  { value: "kz", label: "Kazakstan" },
  { value: "tj", label: "Tajikistan" }
];

const countries = {
  kg: [
    { value: "talas", label: "Talas" },
    { value: "chuy", label: "Chuy" },
    { value: "osh", label: "Osh" }
  ],
  kz: [
    { value: "taraz", label: "Taraz" },
    { value: "jambyl", label: "Jambyl" }
  ],
  tj: [
    { value: "tj1", label: "Tj1" },
    { value: "tj2", label: "Tj2" }
  ]
};

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      isUserAgree: false,
      userForm: {
        role: "guide",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: ""
      },
      touristForm: {
        residence: ""
      },
      guideForm: {
        serviceCountries: []
      },
      hostForm: {
        country: "",
        region: ""
      }
    };
  }

  handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.props.history.push("/");
    }

    this.setState({ validated: true });
  };

  onUserFormChange = e => {
    const { name, value } = e.target;
    this.setState({ userForm: { [name]: value } });
  };

  onTouristFormChange = e => {
    this.setState({ touristForm: { residence: e.target.value } });
  };

  onGuideFormChange = selectedCountries => {
    this.setState({ guideForm: { serviceCountries: selectedCountries } });
  };

  onCountrySelect = selectedCountry => {
    this.regionOptions = countries[selectedCountry.value];
    this.setState({ hostForm: { country: selectedCountry } });
  };

  onRegionSelect = selectedRegion => {
    this.setState({ hostForm: { region: selectedRegion } });
  };

  toggleAgreement = () => {
    this.setState({ isUserAgree: !this.state.isUserAgree });
  };

  render() {
    const {
      state: { validated, userForm, touristForm, isUserAgree },
      handleSubmit,
      onUserFormChange,
      onTouristFormChange,
      onGuideFormChange,
      onCountrySelect,
      onRegionSelect,
      toggleAgreement,
      regionOptions
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
                id="formHorizontalRadios1"
                onChange={onUserFormChange}
              />
              <Form.Check
                checked={userForm.role === "guide"}
                type="radio"
                label="Guide"
                value="guide"
                name="role"
                id="formHorizontalRadios2"
                onChange={onUserFormChange}
              />
              <Form.Check
                checked={userForm.role === "host"}
                type="radio"
                label="Host"
                value="host"
                name="role"
                id="formHorizontalRadios3"
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
                  aria-describedby="inputGroupPrepend"
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
                  value={touristForm.residence}
                  onChange={onTouristFormChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            )}
            {userForm.role === "guide" && (
              <Form.Group as={Col}>
                <Form.Label>Service Countries</Form.Label>
                <Select
                  onChange={onGuideFormChange}
                  options={countryOptions}
                  isMulti
                />
              </Form.Group>
            )}
            {userForm.role === "host" && (
              <>
                <Form.Group as={Col}>
                  <Form.Label>Country</Form.Label>
                  <Select options={countryOptions} onChange={onCountrySelect} />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Region</Form.Label>
                  <Select
                    options={regionOptions}
                    onChange={onRegionSelect}
                    noOptionsMessage={() => "Please select a country"}
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
            >
              Register
            </Button>
          </Form>
        </Col>
      </div>
    );
  }
}

export default Signup;
