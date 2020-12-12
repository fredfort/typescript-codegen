import styled from "styled-components";
import { colors, shadows } from "../../styles";

interface ButtonStyledProps {
  btnType?: "info" | "error";
}

const Button = styled.button<ButtonStyledProps>`
  padding: 10px;
  border-radius: 8px;
  color: ${colors.white};
  background-color: ${(props) =>
    props.btnType === "error" ? colors.red : colors.blue400};
  border: none;
  cursor: pointer;
  margin: 5px 0px;
  &:hover {
    box-shadow: ${shadows.shadowDepth2};
  }
`;

export default Button;
