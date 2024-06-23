import React, { useState } from "react";
import useForm from "../Hooks/useForm.js";
import validate from "../Utils/validate.js";
import ReactModal from "react-modal";
import "../App.css";

const EventForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    {
      name: "",
      email: "",
      age: "",
      attending: false,
      guestName: "",
    },
    validate,
    setIsModalOpen
  );

  const handleAttendingChange = (e) => {
    handleChange(e);
    if (!e.target.checked) {
      // Reset guestName if attending is unchecked from checked state
      handleChange({
        target: {
          name: "guestName",
          value: "",
        },
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  return (
    <>
      <h1 className="heading">Task/Level - 1</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
            />
            {errors.age && <p>{errors.age}</p>}
          </div>

          <div>
            <label>Are you attending with a guest?</label>
            <input
              type="checkbox"
              name="attending"
              checked={values.attending}
              onChange={handleAttendingChange}
            />
          </div>

          {values.attending && (
            <div>
              <label>Guest Name</label>
              <input
                type="text"
                name="guestName"
                value={values.guestName}
                onChange={handleChange}
              />
              {errors.guestName && <p>{errors.guestName}</p>}
            </div>
          )}

          <button type="submit">Register For Event</button>
        </form>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Summary"
        className="modal-content"
        ariaHideApp={false}
      >
        <h2>Form Summary</h2>
        <p>Name: {values.name}</p>
        <p>Email: {values.email}</p>
        <p>Age: {values.age}</p>
        <p>
          Are you attending with a guest?: {values.attending ? "Yes" : "No"}
        </p>
        {values.attending && <p>Guest Name: {values.guestName}</p>}
        <button onClick={closeModal}>Close</button>
      </ReactModal>
    </>
  );
};

export default EventForm;
