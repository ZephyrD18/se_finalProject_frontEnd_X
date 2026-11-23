import "./SuccessModal.css";
import Modal from "../Modal/Modal";

function SuccessModal({ onClose, onSignInClick }) {
  return (
    <Modal name="success" onClose={onClose}>
      <h2 className="success-modal__title">
        Registration successfully completed!
      </h2>
      <button
        className="success-modal__link"
        type="button"
        onClick={onSignInClick}
      >
        Sign in
      </button>
    </Modal>
  );
}

export default SuccessModal;
