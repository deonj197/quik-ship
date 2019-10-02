import React from "react";
import { Form, Button } from "react-bootstrap";

export function Home() {
  return (
    <div
      style={{
        width: "450px",
        margin: "auto",
        marginTop: "120px",
        backgroundColor: "white",
        padding: "40px 75px  40px",
        border: "1px solid grey",
        borderRadius: "3%"
      }}
      className="text-nowrap"
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
        <Button variant="primary" type="submit" style={{ marginLeft: "110px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Home;
