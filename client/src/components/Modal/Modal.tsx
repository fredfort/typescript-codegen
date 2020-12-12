import { ModalBackground, ModalContent, ModalHeader } from "./Modal.style";
import ReactDOM from "react-dom";
import React, { FunctionComponent } from "react";
import Button from "../Button/Button";
import { Flex, FlexItem } from "../../styles/layout";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  children,
  title,
  open,
  onClose,
}) => {
  return open ? (
    <ModalBackground>
      <ModalContent>
        <ModalHeader>
          <Flex>
            <FlexItem>{title}</FlexItem>
            <FlexItem>
              <Button onClick={onClose}>
                <FaTimes />
              </Button>
            </FlexItem>
          </Flex>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalBackground>
  ) : null;
};

const ModalPortal: FunctionComponent<ModalProps> = ({
  children,
  title,
  open,
  onClose,
}) => {
  const modalElement: HTMLElement = document.getElementById(
    "modal"
  ) as HTMLElement;
  return ReactDOM.createPortal(
    <Modal title={title} open={open} onClose={onClose}>
      {children}
    </Modal>,
    modalElement
  );
};

export default ModalPortal;
