import styled from "styled-components";
import { globalColor } from "../../../styles/root";

export const BackdropMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;

  overflow: hidden;
`;

export const MenuContainer = styled.div`
  z-index: 1001;
  position: relative;
  right: 0;
  margin-left: auto;
  height: 100vh;
  background-color: rgba(17, 16, 28);
  padding: 26px 32px 32px 32px;

  overflow: hidden;

  @media (max-width: 374px) {
    max-width: 200px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 200px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 350px;
  }
`;

export const IconClose = styled.svg`
  stroke-width: 2px;
  width: 32px;
  height: 32px;
  fill: ${globalColor.colorWhite};
`;

export const CloseBtn = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  stroke: white;
  top: 26px;
  right: 32px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  align-items: center;
  transform: translateY(60%);
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`;

export const NavBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`;
