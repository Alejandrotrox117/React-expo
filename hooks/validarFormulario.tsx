import { useState } from 'react';

const useUserFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = ({ name, email, role, password, confirmPassword }) => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'El correo no es válido.';
    }
    if (!role.trim()) newErrors.role = 'El rol es obligatorio.';
    if (!password.trim()) newErrors.password = 'La contraseña es obligatoria.';
    if (password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return {
    errors,
    validateForm,
    clearError,
  };
};

export default useUserFormValidation;
