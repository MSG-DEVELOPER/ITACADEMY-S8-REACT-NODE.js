interface UserToSend {
  name: string;
  email: string;
  password: string;
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
