import React from "react";
import { observer, inject } from "mobx-react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Auth.scss";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      loginForm: {
        email: null,
        password: null,
      },
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    let loginForm = this.state.loginForm;
    if (form.checkValidity()) {
      this.props.stores.authStore.signin(loginForm).then(
        (resp) => {
          console.log("res: ", resp);
        },
        (err) => {
          console.log("err: ", err);
        }
      );
    }

    this.setState({ validated: true });
    event.preventDefault();
  };

  onLoginFormChange = (e) => {
    let loginForm = this.state.loginForm;
    const { name, value } = e.target;
    loginForm[name] = value;
    this.setState({ loginForm });
  };

  render() {
    const {
      state: { validated, loginForm },
      handleSubmit,
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
            <Form.Group as={Col} controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={loginForm.email}
                  onChange={this.onLoginFormChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginForm.password}
                onChange={this.onLoginFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="genric-btn info medium circle c-w-100"
              type="submit"
            >
              Login
            </Button>
            <br />
            <br />
            <Link to="/signup">Register</Link>
          </Form>
        </Col>
      </div>
    );
  }
}

export default inject("stores")(observer(Signin));
