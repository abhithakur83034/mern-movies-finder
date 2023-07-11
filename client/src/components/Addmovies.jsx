import React from "react";
import { Button, Col, Container, Form, Row,Navbar,Nav, Card } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Addmovies = () => {
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();


    

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };




    const onSubmit=(data)=>{
        const file = data.image[0];
        const formdata = new FormData();
let arrGenres = data.genres.split(",")
        formdata.append('image',file)
        formdata.append('genres',arrGenres)
        // console.log('bbbbbbbbbbbbbbbbgenres',(data.genres).split(","));
        formdata.append('title',data.title)
        formdata.append('year',data.year)
        formdata.append('runtime',data.runtime)
        formdata.append('director',data.director)
        formdata.append('actors',data.actors)
        formdata.append('plot',data.plot)

        axios.post('http://localhost:5500/add',formdata)
        .then((res)=>{
            console.log(res.data)
            alert('added successfully')
        }).catch((error)=>{
            console.log(error.response.data)
        })

        console.log(data)
    }
  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className=" ">
                <Nav.Link href="/dash">Back</Nav.Link>
               
                <Nav.Link
                  onClick={() => {
                    logout();
                  }}
                >
                  LogOut
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
        <Row className="mt-2">
            <Col></Col>
            <Col>
            <Card>
            <center><Card.Title>ADD MOVIES</Card.Title></center>
                <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image" {...register('image',{required:true})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>genres</Form.Label>
          <Form.Control type="text" placeholder="Genres" name="genres" {...register('genres',{required:true})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> title</Form.Label>
          <Form.Control type="text" placeholder="Title" name="title" {...register('title',{required:true})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>year</Form.Label>
          <Form.Control type="date" placeholder="year" name="year" {...register('year',{required:true})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>runtime</Form.Label>
          <Form.Control type="text" placeholder="Runtime" name="runtime" {...register('runtime',{required:true})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>director</Form.Label>
          <Form.Control type="text" placeholder="Director" name="director" {...register('director',{required:true})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>actors</Form.Label>
          <Form.Control type="text" placeholder="Actors" name="actors" {...register('actors',{required:true})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>plot</Form.Label>
          <Form.Control type="text" placeholder="Plot" name="plot" {...register('plot',{required:true})}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
      </Card.Body>
           </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  );
};

export default Addmovies;
