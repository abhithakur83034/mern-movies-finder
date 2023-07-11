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

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(" http://localhost:5500/register", data)
      .then((res) => {
        const data = res.data;
        console.log("*************",data);
        // alert('Now you are registered')
        toast.success("Now you are registered");
        setTimeout(() => {
          navigate("/signin");
        }, 3000);
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("opps...");
      });
    console.log(data);
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand>Movies Finder App</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav className=" ">
                  <Nav.Link href="/">Back</Nav.Link>
                  <Nav.Link href="/signin">SignIn</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Col></Col>
          <Col>
            <Card className="mt-5">
              <Card.Body>
                <Card.Title>User SignUp</Card.Title>
                <hr />
                <>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="User Name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="User Name"
                      name="name"
                      {...register("name", { required: true })}
                    />
                  </FloatingLabel>

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
                </>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
