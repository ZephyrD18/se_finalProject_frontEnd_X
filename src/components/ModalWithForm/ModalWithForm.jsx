import "./ModalWithForm.css";
import Modal from "../Modal/Modal";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function ModalWithForm({
  name,
  title,
  fields,
  initialValues,
  submitText,
  switchText,
  onSwitch,
  onClose,
  onSubmit,
  serverError,
}) {
  const { values, errors, isValid, handleChange } =
    useFormWithValidation(initialValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };

  return (
    <Modal name={name} onClose={onClose}>
      <h2 className="modal-form__title">{title}</h2>
      <form
        className="modal-form"
        name={name}
        onSubmit={handleSubmit}
        noValidate
      >
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
                value={values[field.name]}
                onChange={handleChange}
                required
              />
              <span className="modal-form__error">{errors[field.name]}</span>
            </label>
          ))}
        </fieldset>
        <div className="modal-form__actions">
          <span className="modal-form__server-error">{serverError}</span>
          <button
            className="modal-form__submit"
            type="submit"
            disabled={!isValid}
          >
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
