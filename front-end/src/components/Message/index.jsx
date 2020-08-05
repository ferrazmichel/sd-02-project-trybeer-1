import React, { useEffect, useContext } from "react";
import { Context } from "../../context";
import "./style.css";

const types = {
  ALERT: "#e71d36",
  SUCCESS: "#49b76d",
  NEUTRAL: "white",
};

const createTimeout = ({ infinity, setMessage }) => {
  if (!infinity) {
    setTimeout(() => {
      setMessage({ value: "", type: "" });
    }, 2500);
  }
};

const Message = ({ infinity }) => {
  const { setMessage, message: { value, type } } = useContext(Context);
  useEffect(() => {
    createTimeout({ infinity, setMessage });
  }, []);
  return (
    <div
      className="message_comp"
      style={{ boxShadow: `5px 5px 30px -1px ${types[type]}`,
        display: (value) ? "flex" : "none" }}
    >
      <button type="button" onClick={() => setMessage({ value: "", type: "" })}>
        <span className="material-icons">close</span>
      </button>
      <strong style={{ color: `${types[type]}` }}>{value}</strong>
    </div>
  );
};

export default Message;
