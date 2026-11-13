import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { EMAIL_PATTERN } from "../../utils/constants";

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    autoComplete: "email",
    pattern: EMAIL_PATTERN,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    autoComplete: "new-password",
    minLength: 8,
  },
  {
    name: "name",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    autoComplete: "username",
    minLength: 2,
    maxLength: 30,
  },
];

const initialValues = { email: "", password: "", name: "" };

function RegisterModal({ onClose, onSubmit, onSwitch, serverError }) {
  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      fields={fields}
      initialValues={initialValues}
      submitText="Sign up"
      switchText="Sign in"
      onSwitch={onSwitch}
      onClose={onClose}
      onSubmit={onSubmit}
      serverError={serverError}
    />
  );
}

export default RegisterModal;
