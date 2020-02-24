import React from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Auth.scss";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false
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

  render() {
    const {
      state: { validated },
      handleSubmit
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
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="genric-btn info medium circle c-w-120"
              type="submit"
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
