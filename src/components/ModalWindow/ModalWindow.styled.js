import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const CloseModalBtn = styled.svg`
  position: absolute;

  stroke: ${globalColor.textMain};

  top: 16px;
  right: 16px;
  width: 26px;
  height: 26px;

  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${globalColor.colorOrange};
  }
`;

export const ContentWrapper = styled.div`
  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${globalColor.main};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
