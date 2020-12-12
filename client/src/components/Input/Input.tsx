import styled from "styled-components";
import { spacings, colors, transitions, shadows } from "../../styles/";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  font-size: 14px;
  padding: ${spacings.xs} ${spacings.sm};
  border-width: 1px;
  border-radius: 2px;
  border-style: solid;
  border-color: ${(props) => (props.error ? colors.red : colors.black)};
  transition: box-shadow ${transitions.medium};
  box-shadow: ${shadows.shadowDepth1};
  margin: 0;
  &:focus {
    outline-color: ${(props) => (props.error ? colors.red : colors.blue400)};
    box-shadow: ${shadows.shadowDepth2};
  }
  &:invalid {
    outline-color: ${colors.red};
  }
`;

export default StyledInput;
