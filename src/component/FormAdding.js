import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../action/actions";
import axios from "axios";
const FormAdding = () => {
  const dispatch = useDispatch();
  const [infoUser, setInfoUser] = useState({
    name: "",
    username: "",
    password: "",
  });
  const isCreating = useSelector((state) => state.user.isSubmit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoUser((infoUser) => ({
      ...infoUser,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (infoUser?.name && infoUser.password && infoUser.username)
      dispatch(createNewUser(infoUser));
  };

  return (
    <>
      <Container>
        {" "}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={infoUser.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={infoUser.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={infoUser.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={isCreating}
          >
            Create
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormAdding;
