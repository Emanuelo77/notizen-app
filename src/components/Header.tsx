import { Button, Container, Form, Navbar } from "react-bootstrap";


function Header() {
  return (
    <Navbar expand="md" className="bg-body-tertiary mb-2">
      <Container>
        <Navbar.Brand>Notiz App</Navbar.Brand>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Notiz Suchen"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Suchen</Button>
                </Form>
      </Container>
    </Navbar>
  );
}

export default Header;