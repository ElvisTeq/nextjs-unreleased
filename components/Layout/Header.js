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
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/subscribe">Subscribe</Nav.Link>
              <Nav.Link href="merch">Merch</Nav.Link>
              <Nav.Link href="#action4">News</Nav.Link>
              <NavDropdown title="Platforms" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/platforms/nintendo">
                  Nintendo
                </NavDropdown.Item>
                <NavDropdown.Item href="/platforms/playstation">
                  PlayStation
                </NavDropdown.Item>
                <NavDropdown.Item href="/platforms/xbox">XBox</NavDropdown.Item>
                <NavDropdown.Item href="/platforms/pc">PC</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">All Platforms</NavDropdown.Item>
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
