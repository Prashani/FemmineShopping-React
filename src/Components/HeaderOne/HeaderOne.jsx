import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

const HeaderOne = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Brands</Nav.Link>

            <NavDropdown title="New Arrivals" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blouses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Dresses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Skirts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Trouses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sarees</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Collections" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Summer Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">
                Winter Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Top Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Fab Collection
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Jounal</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderOne;
