import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

const NewPost = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    text: true,
    image: true,
  });
  const textInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;
    const eneteredImage = undefined;

    const enteredTextIsValid = !isEmpty(enteredText);
    const eneteredImageIsValid = true;

    setFormInputsValidity({
      text: enteredTextIsValid,
      image: enteredTextIsValid,
    });

    const formIsValid = enteredTextIsValid && eneteredImageIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      text: enteredText,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="modal-header">
        <h5 className="modal-title">Create a new post</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <label htmlFor="name" className="form-label">
          Text
        </label>
        <textarea
          className={`form-control ${
            !formInputsValidity.text ? "is-invalid" : ""
          }`}
          rows="3"
          id="name"
          ref={textInputRef}
        ></textarea>
        {!formInputsValidity.text && (
          <div className="invalid-feedback">Text must not be empty.</div>
        )}
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-outline-primary">
          Create
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default NewPost;
