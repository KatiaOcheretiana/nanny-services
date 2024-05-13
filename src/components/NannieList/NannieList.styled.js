import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1184px;
`;

export const Button = styled.button`
  border-radius: 30px;
  border-color: transparent;
  padding: 14px 40px;
  background-color: ${(props) => props.theme.second};

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};

  &:hover {
    color: ${(props) => props.theme.main};
    background-color: ${globalColor.lightWhite};
    border-color: ${(props) => props.theme.main};
  }

  transition: all 0.5s ease;

  margin: 64px auto 0 auto;
  display: flex;
  justify-content: center;
`;
