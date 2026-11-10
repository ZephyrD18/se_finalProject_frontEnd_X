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

function RegisterModal({ onClose, onSwitch }) {
  return (
    <ModalWithForm
      name="register"
      title="Sign up"
      fields={fields}
      submitText="Sign up"
      switchText="Sign in"
      onSwitch={onSwitch}
      onClose={onClose}
    />
  );
}

export default RegisterModal;
