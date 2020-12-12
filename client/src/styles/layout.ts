import styled from "styled-components";

const Flex = styled.div<{
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "space-between"};
  height: 100%;
`;

const FlexItem = styled.div<{ grow?: number; shrink?: number; basis?: string }>`
  flex: ${(props) =>
    `${props.grow ?? 0} ${props.shrink ?? 0} ${props.basis ?? "auto"}`};
`;

export { Flex, FlexItem };
