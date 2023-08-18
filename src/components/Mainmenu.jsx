import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import logo1 from "../images/lucky trip 2.png";
import { BsAirplaneFill } from "react-icons/bs";
import Icon from "./Icon";

function Mainmenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo1} alt="ok" style={{ width: 160 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <Icon
                family="Ant"
                name="AiOutlineHome"
                style={{ marginTop: "-5" }}
              />
              &nbsp;Home
            </Nav.Link>
            <Nav.Link href="#about">Aboutus</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="danger"
              href="https://booking-luckytrip.co.in/"
              className="custom-btn btn"
            >
              <BsAirplaneFill />
              &nbsp;LIVE Booking
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainmenu;
