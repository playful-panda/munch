import React from "react";
import "./style.module.css";

function Button({ text, modifier, clickHandler }) {
  return (
    <button className={`button-${modifier}`} onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;
