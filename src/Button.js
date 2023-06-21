import React from "react";

const Button = (props) => {
  return <button onClick={props.click}>Sort {props.name}</button>;
};

export default Button;
