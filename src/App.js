import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Jumbotron, Nav, NavDropdown, NavItem, NavbarBrand, Form, FormControl } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar';



class App extends Component {
  render() {
    return (
      <Container>
        <CustomNavbar></CustomNavbar>
        <Col xm={1}></Col>
        <Col xm={10}>
        <Jumbotron>Test</Jumbotron>
        </Col>
        <Col xm={1}></Col>
        
      </Container>
    );
  }
}

export default App;
