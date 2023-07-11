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
      .post(" http://localhost:5500/login", data)
      .then((res) => {
        const data = res.data;
        console.log("reslog", data);
       if(data){
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("You Are Successfully Logged In");
        setTimeout(() => {
          navigate("/");
        }, 1000);
       }else{
        toast.warn("please provide correct information")
       }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data);
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
                <Nav.Link href="/signup">Signup</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Col></Col>
        <Col>
          <Card className="mt-5">
            <Card.Body>
              <Card.Title>User SignIn</Card.Title>
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
