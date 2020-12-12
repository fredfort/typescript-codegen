import styled from "styled-components";
import { colors, shadows, spacings } from "../../styles";

interface CardProps {
  clickable?: boolean;
  toDelete?: boolean;
  toUpdate?: boolean;
}

const Card = styled.div<CardProps>`
  border: 1px solid ${colors.lightgrey};
  border-radius: 8px;
  padding: ${spacings.lg} ${spacings.md};
  box-shadow: ${shadows.shadowDepth2};
  opacity: ${(props) => (props.toUpdate || props.toDelete ? 0.15 : 1)};
  background-color: ${(props) => (props.toDelete ? colors.red : "transparent")};
  transition: all 1s linear;
  &:hover {
    box-shadow: ${shadows.shadowDepth3};
  }
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
`;

export default Card;
