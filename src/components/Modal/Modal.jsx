import "./Modal.css";

function Modal({ name, onClose, children }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container" role="dialog" aria-modal="true">
        <button
          className="modal__close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
