import styled from "styled-components";
import { colors } from "../../styles";
const Text = styled.p`
  margin: 8px auto;
`;
const Error = styled(Text)`
  color: ${colors.red};
`;

export { Text, Error };
