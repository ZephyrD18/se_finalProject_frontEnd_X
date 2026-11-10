import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

function ModalWithForm({
  name,
  title,
  fields,
  submitText,
  switchText,
  onSwitch,
  onClose,
}) {
  return (
    <Modal name={name} onClose={onClose}>
      <h2 className="modal-form__title">{title}</h2>
      <form className="modal-form" name={name} noValidate>
        <fieldset className="modal-form__fields">
          {fields.map((field) => (
            <label className="modal-form__field" key={field.name}>
              <span className="modal-form__label">{field.label}</span>
              <input
                className="modal-form__input"
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                pattern={field.pattern}
                minLength={field.minLength}
                maxLength={field.maxLength}
                autoComplete={field.autoComplete}
                required
              />
              <span className="modal-form__error"></span>
            </label>
          ))}
        </fieldset>
        <div className="modal-form__actions">
          <button className="modal-form__submit" type="submit">
            {submitText}
          </button>
        </div>
      </form>
      <p className="modal-form__switch">
        or{" "}
        <button
          className="modal-form__switch-button"
          type="button"
          onClick={onSwitch}
        >
          {switchText}
        </button>
      </p>
    </Modal>
  );
}

export default ModalWithForm;
