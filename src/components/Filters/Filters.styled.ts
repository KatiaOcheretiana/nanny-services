import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const OptionsContainer = styled.div`
  position: relative;
  width: 226px;

  margin-bottom: 35px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const Selector = styled.div`
  border-radius: 14px;
  padding: 16px 18px;
  width: 100%;
  background-color: ${(props) => props.theme.main};
  color: ${globalColor.white};
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 14px;
  background-color: ${globalColor.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;

  margin-top: 8px;
`;

export const Option = styled.div<{ selected: boolean }>`
  padding: 12px 18px;
  font-weight: 400;
  font-size: 18px;
  line-height: 111%;
  color: ${(props) => (props.selected ? "black" : "rgba(17, 16, 28, 0.3)")};
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;
