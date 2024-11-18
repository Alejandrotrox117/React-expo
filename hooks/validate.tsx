import { useState } from "react";

type ValidationErrors = {
  firstname?: string;
  lastname?: string;
  id?: string;
  email?: string;
  username?: string;
  password?: string;
};

const useValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (name: keyof ValidationErrors, value: string) => {
    let error: string | undefined;

    if (name === "firstname") {
      if (!value) {
        error = "El nombre es obligatorio";
      }
    }

    if (name === "lastname") {
      if (!value) {
        error = "El apellido es obligatorio";
      }
    }

    if (name === "id") {
      if (!value) {
        error = "La cédula es obligatoria";
      } else if (!/^\d+$/.test(value)) {
        error = "La cédula debe ser un número";
      }
    }
    
    if (name === "username") {
      if (!value) {
        error = "El nombre de usuario es obligatorio";
      } else if (value.length < 3) {
        error = "El nombre de usuario debe tener al menos 3 caracteres";
      } else if (value.length > 20) {
        error = "El nombre de usuario no debe exceder los 20 caracteres";
      } else if (!/^[a-zA-Z0-9_]*$/.test(value)) {
        error =
          "El nombre de usuario solo puede contener letras, números y guiones bajos";
      }
    }
    if (name === "email") {
      if (!value) {
        error = "El correo es obligatorio";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "El correo no es válido";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "La contraseña es obligatoria";
      } else if (value.length < 6) {
        error = "La contraseña debe tener al menos 6 caracteres";
      }
    }

    // Actualiza los errores
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  return { errors, validate };
};

export default useValidation;
