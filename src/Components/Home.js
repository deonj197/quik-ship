import React from "react";
import { Form, Button } from "react-bootstrap";

import "../Styles/Home.css";

export function Home() {
  return (
    <div className="login-page">
      <div
        className="text-nowrap"
        style={{
          width: "450px",
          margin: "auto",
          marginLeft: "1050px",

          marginTop: "120px",
          backgroundColor: "skyblue",
          padding: "40px 75px  40px",
          border: "1px solid grey",
          borderRadius: "3%"
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>Welcome to Quik Ship</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>{" "}
          <br />
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "110px" }}
          >
            Login
          </Button>
        </Form>
      </div>
      <div className="form-2 text-nowrap">
        <h3 style={{ textAlign: "center" }}>Sign up now!</h3> <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Sign up" />
          </Form.Group>{" "}
          <br />
          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "110px" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Home;
