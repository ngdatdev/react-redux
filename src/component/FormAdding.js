import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormAdding = () => {
  return (
    <>
      <Container>
        {" "}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormAdding;
