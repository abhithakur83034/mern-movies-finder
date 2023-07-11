import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Card, CardGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Gene = () => {
  const genData = useSelector((state) => state.genData.data);
  console.log("genData",genData)
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5500/show")
      .then((res) => {
        let data = res.data
        console.log("resdataaaa",data)
        const regexPattern = new RegExp(genData);
        console.log("rpattern",regexPattern)
        const filtered = data.filter((item) =>
          item.genres.some((value) => regexPattern.test(value))
        );
        console.log(filtered,"hkyjku>>>>>>>>>>>>>>>")
        setFilteredData(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(filteredData, ">>>>>>>");
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Search your Movies Genres</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className=" ">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dash">Back</Nav.Link>
                <Nav.Link
                  href="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>

      <Row className="ms-5">
        <CardGroup>
          {filteredData?.length !== 0 &&
            filteredData?.map((item, index) => {
              return (
                <div key={index}>
                  <Card className="ms-3 mt-2" style={{ maxWidth: "150px" }}>
                    <Card.Img variant="top" src={`http://localhost:5500/img/${item.image}`} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.actors}</Card.Text>
                      <Card.Text>{item.genres}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </CardGroup>
      </Row>
      {/* <ToastContainer /> */}
    </Container>
  );
};

export default Gene;
