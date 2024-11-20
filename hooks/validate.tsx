import { useState } from "react";

type ValidationErrors = {
  firstname?: string;
  lastname?: string;
  id?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
};

const useValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (name: keyof ValidationErrors, value: string, formData?: any) => {
    let error: string | undefined;

    if (name === "firstname") {
      if (!value) {
        error = "El nombre es obligatorio";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "El nombre solo puede contener letras y espacios";
      }
    }

    if (name === "lastname") {
      if (!value) {
        error = "El apellido es obligatorio";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "El apellido solo puede contener letras y espacios";
      }
    }

    if (name === "id") {
      if (!value) {
        error = "La cédula es obligatoria";
      } else if (!/^\d{6,8}$/.test(value)) {
        error = "La cédula debe tener entre 6 y 8 dígitos";
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
        error = "El nombre de usuario solo puede contener letras, números y guiones bajos";
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

    if (name === "confirmPassword") {
      if (!value) {
        error = "La confirmación de la contraseña es obligatoria";
      } else if (formData && value !== formData.password) {
        error = "Las contraseñas no coinciden";
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