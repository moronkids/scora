import React, { useContext, useEffect } from "react";
import { Hooks } from 'providers';
const Input = props => {
  const { username, setusername, password, setpassword } = useContext(Hooks);

  const title = props.title;
  const padding = props.padding;
  const placeholder = props.placeholder;
  const FillIt = (e: any) => {
    if (props.username) setusername(e);
    if (props.password) setpassword(e);
  }

  return (
    <div className="input-fields">
      <h1
        className="input-fields__title"
        style={{ padding: padding ? padding : 0 }}
      >
        {title}
      </h1>
      <input
        className="input-fields__input-box"
        type={props.type}
        placeholder={placeholder}
        // onChange={(e: any) => FillIt(e.target.value)}
        ref={props.ref}
      />
      <p>{props.error}</p>
    </div>
  );
};

export default Input;
