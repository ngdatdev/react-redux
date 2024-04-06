import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRedux, fetchAllUsers } from "../action/actions";

const TableUser = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers.content);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const handleDelete = (username) => {
    dispatch(deleteUserRedux(username))
  }
  
  return (
    <Container>
      <hr />

      {isError ? (
        <>Something wrong, please try again</>
      ) : (
        <>
          {isLoading ? (
            <p>Loading data...</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listUsers &&
                  listUsers.length > 0 &&
                  listUsers.map((item, index) => {
                    return (
                      <tr key={`user-${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => handleDelete(item.username)}>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          )}
        </>
      )}
    </Container>
  );
};

export default TableUser;
