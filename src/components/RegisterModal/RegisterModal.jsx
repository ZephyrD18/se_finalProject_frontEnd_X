import ModalWithForm from "../ModalWithForm/ModalWithForm";

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    autoComplete: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    autoComplete: "new-password",
  },
  {
    name: "name",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    autoComplete: "username",
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
