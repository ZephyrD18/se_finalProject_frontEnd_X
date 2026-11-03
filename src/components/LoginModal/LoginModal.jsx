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
    autoComplete: "current-password",
  },
];

function LoginModal({ onClose, onSwitch }) {
  return (
    <ModalWithForm
      name="login"
      title="Sign in"
      fields={fields}
      submitText="Sign in"
      switchText="Sign up"
      onSwitch={onSwitch}
      onClose={onClose}
    />
  );
}

export default LoginModal;
