import React from "react";
import Form from "react-bootstrap/Form";
import { handleField } from "../../services/Validate";
import "./style.css";

const FormGroup = ({ callback, field, state, testId, defaultValue, readOnly }) => (
  <Form.Group className="formgroup_component">
    <Form.Control
      data-testid={testId}
      defaultValue={defaultValue}
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
      readOnly={readOnly}
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
