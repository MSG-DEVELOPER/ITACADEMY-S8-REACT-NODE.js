import { useState, useEffect } from "react";
import { Container, Table, Header, Row, Cell ,DeleteButton} from "./HomePage.style";
import FormAddUserHome from "../../components/Home/FormAddUserHome/FormAddUserHome";
import { deleteUser } from "../../api/users"; 

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
              <Cell><DeleteButton title="Eliminar" onClick={()=>handleDelete(item._id)}>✂</DeleteButton></Cell> 
            </Row>
          ))}
        </Table>
      </Container>

      <FormAddUserHome/>


    </div>
  );
}

export default HomePage;
