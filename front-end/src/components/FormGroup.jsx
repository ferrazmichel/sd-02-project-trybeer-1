import React from "react";
import Form from "react-bootstrap/Form";
import { handleField } from "../services/Validate";

const FormGroup = ({ state, field, callback }) => (
  <Form.Group className="form_group_component">
    <Form.Control
      data-testid="name-input"
      isInvalid={state.error}
      isValid={!state.error && state.value}
      onChange={(e) =>
        handleField({
          field,
          value: e.target.value,
          callback,
        })
      }
      placeholder={field}
      required="required"
      type={field === "password" ? "password" : "string"}
    />
    <Form.Control.Feedback
      as="p"
      data-testid="name-invalid"
      style={{ display: !state.error ? "none" : "block" }}
      type="invalid"
    >
      {state.error}
    </Form.Control.Feedback>
  </Form.Group>
);

export default FormGroup;
