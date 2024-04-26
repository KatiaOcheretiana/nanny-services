import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const CloseModalBtn = styled.svg`
  position: absolute;

  stroke: ${globalColor.textMain};

  top: 16px;
  right: 16px;
  width: 26px;
  height: 26px;

  &:hover,
  &:focus {
    stroke: ${globalColor.colorOrange};
  }
`;
