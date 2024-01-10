import React from "react";
export interface ButtonProps {
  onClick: () => void;
}
function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>Click me</button>;
}
export default Button;
