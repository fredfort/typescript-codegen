import styled from "styled-components";
import { colors, spacings } from "../../styles";

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  transition: background-color 0.5s ease-in-out;
  pointer-events: all;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 500px;
  height: 500px;
  border-radius: 8px;
  padding: ${spacings.md};
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid ${colors.lightgrey};
  padding-bottom: ${spacings.sm};
  margin-bottom: ${spacings.sm};
`;

const ModalFooter = styled.div`
  border-top: 1px solid ${colors.lightgrey};
  padding-top: ${spacings.sm};
  margin-top: ${spacings.sm};
`;

export { ModalBackground, ModalContent, ModalHeader, ModalFooter };
