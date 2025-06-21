interface UserToSend {
  name: string;
  email: string;
  password: string;
  role: string;
  
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}


export function createUser(user: UserToSend) {
  return fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return res.json();
  });
}




export function deleteUser(id: string) {
  return fetch(`http://localhost:5000/api/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        // Por ejemplo, 404 o 500
        throw new Error(`Error al borrar usuario (status: ${res.status})`);
      }
      return res.json(); // o res.text(), según lo que devuelva tu backend
    })
    .catch((err) => {
      console.error("Error en deleteUser:", err.message);
      throw err; // para que el caller (el componente) pueda mostrar alerta si quiere
    });
}
