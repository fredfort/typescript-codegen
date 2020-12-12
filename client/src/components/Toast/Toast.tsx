import React, { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import { ToastStyled, ToastStyledProps, Container } from "./Toast.styles";

interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
}

const Toast: FunctionComponent<ToastStyledProps & ToastProps> = ({
  children,
  isVisible,
  onClose,
  type,
}) => {
  const onCloseButtonClick = () => onClose();

  return (
    isVisible && (
      <ToastStyled type={type}>
        <Container>
          <div>{children}</div>
          <Button onClick={onCloseButtonClick} btnType={type}>
            x
          </Button>
        </Container>
      </ToastStyled>
    )
  );
};

export default Toast;
