import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col,
  Form,
  Card,
  FloatingLabel,
} from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5500/admlogin", data)
      .then((res) => {
        console.log("admres",res)
        console.log("admin-reslog", res.data);
        let data = res.data
        if (data) {
          localStorage.setItem("admin", JSON.stringify(data));
          toast.success("Welcome Admin");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          // toast.warn("Please provide correct information");
          alert('Please provide correct information')
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.resonse.data);
      });
    console.log(data);
  };
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Movies Finder App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className=" ">
                <Nav.Link href="/">Back</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Col></Col>
        <Col>
          <Card className="mt-5">
            <Card.Body>
              <Card.Title>Admin SignIn</Card.Title>
              <hr />

              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  {...register("email", { required: true })}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", { required: true })}
                />
              </FloatingLabel>
            
              <Button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                variant="outline-success"
                size="lg"
              >
                SignUp
              </Button>
              <ToastContainer />
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Signin;
