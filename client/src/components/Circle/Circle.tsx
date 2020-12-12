import styled from "styled-components";
import { colors } from "../../styles";

interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  backgroundColor?: string;
}

const Circle = styled.div<CircleProps>`
  width: ${(props) => (props.size ? `${props.size}px` : `75px`)};
  height: ${(props) => (props.size ? `${props.size}px` : `75px`)};
  border-radius: 50%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.lightgrey};
`;

export default Circle;
