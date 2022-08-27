import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Unreleased</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action2">Subscribe</Nav.Link>
              <NavDropdown title="Platforms" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Nintendo</NavDropdown.Item>
                <NavDropdown.Item href="#action4">PlayStation</NavDropdown.Item>
                <NavDropdown.Item href="#action5">XBox</NavDropdown.Item>
                <NavDropdown.Item href="#action6">PC</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7">
                  All Platforms
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
