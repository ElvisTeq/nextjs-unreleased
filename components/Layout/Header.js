// Header using Bootstrap

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
    <div className={classes.main}>
      <header className={classes.header}>
        <Navbar variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">Unreleased</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {" "}
                <NavDropdown title="Platforms" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/platforms/nintendo">
                    Nintendo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/platforms/playstation">
                    PlayStation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/platforms/xbox">
                    XBox
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/platforms/pc">PC</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">All Platforms</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/subscribe">Subscribe</Nav.Link>
                <Nav.Link href="/merch">Merch</Nav.Link>
                <Nav.Link href="#action4">News</Nav.Link>
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
    </div>
  );
};

export default Header;
