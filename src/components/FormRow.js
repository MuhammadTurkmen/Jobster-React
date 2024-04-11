import React from "react";

const FormRow = ({ type, name, value, handleChange, label }) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        name
      </label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
