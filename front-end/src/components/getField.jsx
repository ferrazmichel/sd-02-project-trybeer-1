import React from "react";
import Form from "react-bootstrap/Form";
import { handleField } from '../pages/commonService';

const getField = ({ state, field, callback }) => (
  <Form.Group className="box box60-80-90 flex-column">
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
      type="string"
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

export default getField;
