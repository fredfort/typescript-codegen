import styled from "styled-components";
import { colors } from "../../styles";

interface ToastStyledProps {
  type?: "info" | "error";
}

const ToastStyled = styled.div<ToastStyledProps>`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.75;
  border-radius: 8px;
  padding: 8px;
  background-color: ${(props) =>
    props.type === "error" ? colors.red : colors.blue400};
  color: ${colors.white};
  min-width: 300px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
`;

export { ToastStyled, ToastStyledProps, Container };
