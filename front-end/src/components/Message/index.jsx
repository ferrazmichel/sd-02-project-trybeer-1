import React, { useState, useEffect } from "react";
import "./style.css";

const types = {
  ALERT: '#f9735e',
  SUCCESS: '#49b76d',
  NEUTRAL: 'white',
};

const close = (setExist) => {
  setExist(false);
};

const display = (exist) => {
  return exist ? 'flex' : 'none';
};

const createTimeout = (inifinity, setExist) => {
  inifinity && setTimeout(() => {
    setExist(false);
  }, 3000);
};

const Message = (props) => {
  const { message, type, inifinity } = props;
  const [exist, setExist] = useState(true);

  useEffect(() => {
    console.log('inifity', inifinity)
    // createTimeout(inifinity, setExist);
  }, []);

  return (
    <div className="message_comp" style={{display: `${display(exist)}`}}>
      <button type="button" onClick={() => close(setExist)}>
        <span className="material-icons">close</span>
      </button>
      <strong style={{color: `${types[type]}`}}>{message}</strong>
    </div>
  );
};

export default Message;
