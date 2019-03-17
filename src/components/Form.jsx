import React from "react";

export const Form = ({ handleChange, handleSubmit, stateValue }) => (
  <div>
    <form>
      <div className="form-group">
        <input
          type="text"
          onChange={handleChange}
          name="FirstName"
          className="form-control"
          placeholder="Enter First name"
          value={stateValue.FirstName}
        />
        {stateValue.errors.FirstName && (
          <span className="field-error d-flex justify-content-end">
            {stateValue.errors.FirstName}
          </span>
        )}
      </div>
      <div className="form-group">
        <input
          type="text"
          onChange={handleChange}
          className="form-control"
          name="LastName"
          placeholder="Enter Last name"
          value={stateValue.LastName}
        />
        {stateValue.errors.LastName && (
          <span className="field-error d-flex justify-content-end">
            {stateValue.errors.LastName}
          </span>
        )}
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          onChange={handleChange}
          name="EmailAddress"
          placeholder="Enter email"
          value={stateValue.EmailAddress}
        />
        {stateValue.errors.EmailAddress && (
          <span className="field-error d-flex justify-content-end">
            {stateValue.errors.EmailAddress}
          </span>
        )}
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-sm form-control"
      >
        Submit
      </button>
    </form>
  </div>
);
