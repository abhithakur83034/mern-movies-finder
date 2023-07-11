import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Slider from "./slider";
import { Navbar, Container, Nav, Button,Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [data, setData] = useState([]);
  let user = JSON.parse(window.localStorage.getItem("user"));
  const admin = JSON.parse(window.localStorage.getItem("admin"));

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5500/show")
      .then((res) => {
        console.log("res", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("dataaaa", data);
  return (
    <Container fluid>
     <Row >
     <Navbar bg="dark" data-bs-theme="dark">
        
        <Navbar.Brand className="ms-5" >Movies Finder App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-5">
            {user || admin ? (
              <Nav.Link
                onClick={() => {
                  logout();
                }}
              >
                LogOut
              </Nav.Link>
             ) : ( 
              <Nav.Link href="/signin">Signin</Nav.Link>
            )} 
             {user || admin ? "" : <Nav.Link href="/signup">Signup</Nav.Link>}
            {user || admin ? "" : <Nav.Link href="/admin">Admin</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
     </Row>

      <div >
        <Slider SlideData={data} />
      </div>
     <Row>
     {user || admin ? (
        <Button href="/dash" variant="dark" className="d-grid gap-2" size="lg">
          Dashboard
        </Button>
       ) : ( 
         "" 
       )} 
     </Row>
    </Container>
  );
};

export default Home;
