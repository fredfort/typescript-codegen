import React, { FunctionComponent } from "react";
import { Error, Text } from "./InputGroup.styles";
import StyledInput, { InputProps } from "../Input/Input";

interface InputGroupProps extends InputProps {
  label: string;
}

const InputGroup: FunctionComponent<InputGroupProps> = ({
  error,
  label,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <Text>{label}</Text>
      <StyledInput {...rest} error={error} className={className} />
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default InputGroup;
