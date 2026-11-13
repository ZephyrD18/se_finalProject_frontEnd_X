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
    autoComplete: "current-password",
  },
];

const initialValues = { email: "", password: "" };

function LoginModal({ onClose, onSubmit, onSwitch, serverError }) {
  return (
    <ModalWithForm
      name="login"
      title="Sign in"
      fields={fields}
      initialValues={initialValues}
      submitText="Sign in"
      switchText="Sign up"
      onSwitch={onSwitch}
      onClose={onClose}
      onSubmit={onSubmit}
      serverError={serverError}
    />
  );
}

export default LoginModal;
