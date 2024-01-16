import { useMemo } from 'react';
export interface ButtonProps {
  onClick: () => void;
}
function Button(props: ButtonProps) {
  const val = useMemo(() => {
    return 10;
  }, []);
  console.log(val);

  return <button onClick={props.onClick}>Click me</button>;
}
export default Button;
