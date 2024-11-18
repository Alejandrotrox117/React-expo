import { useState } from "react";

type ValidationErrors = {
  firstname?: string;
  lastname?: string;
  id?: string;
  email?: string;
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