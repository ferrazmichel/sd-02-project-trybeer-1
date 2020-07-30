import React, { useEffect } from "react";
import "./style.css";

const types = {
  ALERT: "#f9735e",
  SUCCESS: "#49b76d",
  NEUTRAL: "white",
};

const createTimeout = (infinity, setError) => {
  if (!infinity) {
    setTimeout(() => {
      setError(false);
    }, 1000);
  }
};

const Message = (props) => {
  const { message, type, setError, infinity } = props;

  useEffect(() => {
    createTimeout(infinity, setError);
  }, []);

  return (
    <div className="message_comp">
      <button type="button" onClick={() => setError(false)}>
        <span className="material-icons">close</span>
      </button>
      <strong style={{ color: `${types[type]}` }}>{message}</strong>
    </div>
  );
};

export default Message;
