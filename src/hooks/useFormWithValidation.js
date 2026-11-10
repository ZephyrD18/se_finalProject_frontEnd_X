import { useState } from "react";

function getErrorMessage(input) {
  const { typeMismatch, patternMismatch } = input.validity;
  if (input.type === "email" && (typeMismatch || patternMismatch)) {
    return "Invalid email address";
  }
  return input.validationMessage;
}

// Keeps form values and browser validation messages in state
export default function useFormWithValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: getErrorMessage(evt.target) }));
    setIsValid(evt.target.closest("form").checkValidity());
  };

  return { values, errors, isValid, handleChange };
}
