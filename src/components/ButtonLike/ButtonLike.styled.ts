import styled from "styled-components";
import { globalColor } from "../../styles/root";

type IconLikeProps = {
  isLike: boolean;
};

export const ButtonLikeWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border: none;
  background: none;
  padding: 0;
`;

export const IconLike = styled.svg<IconLikeProps>`
  width: 26px;
  height: 26px;

  fill: ${(props) => (props.isLike ? props.theme.main : "transparent")};
  stroke: ${(props) => (props.isLike ? props.theme.main : "#101828")};
`;
