import styled from "styled-components";
import { mediaQuery, spacings } from "../../styles";
const Grid = styled.div`
  display: grid;
  row-gap: 10px;
  margin: ${spacings.sm} 0;
  grid-template-columns: auto;
  column-gap: 30px;
  width: 100%;
  ${mediaQuery.tablet} {
    grid-template-columns: 49% 49%;
    column-gap: 2%;
    row-gap: 20px;
  }
  ${mediaQuery.desktop} {
    grid-template-columns: 32% 32% 32%;
    column-gap: 2%;
    row-gap: 30px;
  }
`;

export default Grid;
