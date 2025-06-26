import { useForm } from "react-hook-form";
import {
  FormContainer,
  StyledForm,
  Input,
  Button,
  ErrorText,
} from "../../components/Home/FormAddUserHome/FormAddUserHome.style";
import { useParams } from "react-router-dom";
import { updateUser } from "../../api/users";

interface FormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function ModifyUserPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const password = watch("password");
  const { userId } = useParams();

  function onSubmit(data: FormData) {
  

    if (data.confirmPassword && data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const userToUpdate: Record<string, string> = {
      ...data,
      role: "user",
    };

  
    Object.keys(userToUpdate).forEach((key) => {
      if (userToUpdate[key] === "") {
        delete userToUpdate[key];
      }
    });

    console.log("Enviando a updateUser:", userToUpdate);

    updateUser(userId!, userToUpdate)
      .then(() => {
        alert("Usuario modificado con éxito");
        reset();
      })
      .catch((error) => {
        alert("Error al modificar usuario");
        console.error(error);
      });
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Nombre"
          {...register("name")}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email no válido",
            },
          })}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <Input
          type="password"
          placeholder="Nueva contraseña"
          {...register("password", {
            minLength: {
              value: 6,
              message: "Debe tener al menos 6 caracteres",
            },
          })}
        />
        {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

        <Input
          type="password"
          placeholder="Repetir nueva contraseña"
          {...register("confirmPassword", {
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}

        <Button type="submit">MODIFICAR</Button>
      </StyledForm>
    </FormContainer>
  );
}

export default ModifyUserPage;
