import { useEffect } from "react";

import "./Modal.css";

function Modal({ name, onClose, children }) {
  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  return (
    <div
      className={`modal modal_type_${name}`}
      onMouseDown={handleOverlayClick}
    >
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
