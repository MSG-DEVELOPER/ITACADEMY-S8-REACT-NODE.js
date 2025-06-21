import { useState, useEffect } from "react";
import { Container, Table, Header, Row, Cell } from "./HomePage.style";
import FormAddUserHome from "../../components/Home/FormAddUserHome/FormAddUserHome";

interface User {
  _id: string;
  name: string;
  email: string;
  role:string;
}

function HomePage() {
  const [util, setUtil] = useState<User[] | undefined>();

  useEffect(handleEffect, []);

  function handleEffect() {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data: User[]) => setUtil(data))
      .catch((er) => console.log(er));
  }

  return (
    <div>
      <Container>
        <Table>
          <Header>
            <Cell>Nombre</Cell>
            <Cell>Email</Cell>
            <Cell>Rol</Cell>
          </Header>
          {util?.map((item) => (
            <Row key={item._id}>
              <Cell>{item.name}</Cell>
              <Cell>{item.email}</Cell>
              <Cell>{item.role}</Cell>
            </Row>
          ))}
        </Table>
      </Container>

      <FormAddUserHome/>


    </div>
  );
}

export default HomePage;
