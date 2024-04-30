import styled from "styled-components";
import { globalColor } from "../../../styles/root";

type Props = {
  styleDirection?: string;
  homePath?: boolean;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  gap: 25px;
  flex-direction: ${(props) => (props.styleDirection ? "column" : "row")};
`;

export const BtnLogOut = styled.button`
  background-color: transparent;
  border: ${globalColor.borderGray};
  border-radius: 30px;
  padding: 14px 39px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};

  &:hover {
    color: ${globalColor.main};
    background-color: ${globalColor.lightWhite};
  }

  transition: all 0.5s ease-in-out;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const UserAvatarField = styled.div`
  width: 40px;
  height: 40px;

  background-color: ${globalColor.lightWhite};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.svg`
  fill: ${globalColor.main};
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};
`;

export const LogInBtn = styled.button<Props>`
  border: ${globalColor.borderGray};
  border-radius: 30px;
  padding: 10px 20px;
  background-color: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};

  &:hover {
    border: 1px solid
      ${(props) => (props.homePath ? globalColor.second : globalColor.white)};
  }

  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 14px 39px;
  }
`;

export const BtnBox = styled.div<Props>`
  display: flex;
  gap: 8px;

  flex-direction: ${(props) => (props.styleDirection ? "column" : "row")};
`;

export const RegisterBtn = styled.button<Props>`
  border-color: transparent;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: ${(props) =>
    props.homePath ? globalColor.main : globalColor.lightWhite};
  color: ${(props) =>
    props.homePath ? globalColor.lightWhite : globalColor.main};

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;

  &:hover {
    color: ${(props) =>
      props.homePath ? globalColor.main : globalColor.lightWhite};
    background-color: ${(props) =>
      props.homePath ? globalColor.lightWhite : globalColor.notActiveSelect};
  }

  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 14px 40px;
  }
`;
