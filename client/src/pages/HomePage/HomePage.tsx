import { useState, useEffect } from "react";
import {
  Container,
  Table,
  Header,
  Row,
  Cell,
  DeleteButton,
  CellActions,
  
} from "./HomePage.style";
import FormAddUserHome from "../../components/Home/FormAddUserHome/FormAddUserHome";
import { deleteUser } from "../../api/users";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

function HomePage() {
  const [util, setUtil] = useState<User[] | undefined>();
  const navigate = useNavigate();

  useEffect(handleEffect, []);

  function handleEffect() {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data: User[]) => setUtil(data))
      .catch((er) => console.log(er));
  }

  function handleDelete(id: string) {
    deleteUser(id)
      .then(() => {
        alert("Usuario eliminado correctamente");
        handleEffect(); // recargar la lista
      })
      .catch((err) => {
        alert("Error al eliminar el usuario: " + err.message);
      });
  }

  function handleModify(id: string) {
    alert(id);
    navigate(`/modifyUser/${id}`);
  }

  return (
    <div>
      <Container>
        <Table>
          <Header>
            <Cell>Nombre</Cell>
            <Cell>Email</Cell>
            <Cell>Rol</Cell>
            <Cell>Actions</Cell>
          </Header>
          {util?.map((item) => (
            <Row key={item._id}>
              <Cell>{item.name}</Cell>
              <Cell>{item.email}</Cell>
              <Cell>{item.role}</Cell>
              <CellActions>
                <DeleteButton
                  title="Eliminar"
                  onClick={() => handleDelete(item._id)}
                >
                  ✂
                </DeleteButton>
                <DeleteButton
                  title="Modificar"
                  onClick={() => handleModify(item._id)}
                >
                  ✍
                </DeleteButton>
              </CellActions>
            </Row>
          ))}
        </Table>
      </Container>

      <FormAddUserHome />

     
    </div>
  );
}

export default HomePage;
