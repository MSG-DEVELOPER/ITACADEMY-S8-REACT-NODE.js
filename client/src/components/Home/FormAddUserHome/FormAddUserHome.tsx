import { useForm } from "react-hook-form";
import { createUser } from "../../../api/users";

import {
  FormContainer,
  StyledForm,
  Input,
  Button,
  ErrorText,
} from "./FormAddUserHome.style";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function FormAddUserHome() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch("password");

  function onSubmit(data: FormData) {
    const userToSend = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    };

    createUser(userToSend)
      .then((response) => {
        console.log("Usuario creado:", response);
        alert("Usuario creado con éxito");
        reset();
       
      })
      .catch((error) => {
        console.error("Fallo al crear usuario:", error);
        alert("Error al crear usuario");
      });
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Nombre"
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email no válido",
            },
          })}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Input
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "Debe tener al menos 6 caracteres",
            },
          })}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Input
          type="password"
          placeholder="Repetir contraseña"
          {...register("confirmPassword", {
            required: "Debes repetir la contraseña",
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}

        <Button type="submit">CREAR</Button>
      </StyledForm>
    </FormContainer>
  );
}

export default FormAddUserHome;
