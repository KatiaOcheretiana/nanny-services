import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const NavWrapperHomePage = styled.div`
  ${({ homePath }) =>
    homePath
      ? `
    /* Styles for home page */
    width: 100%;
    position: fixed;
    z-index: 1;
top:20px;


    &::after {
      position: absolute;
      content: "";
      height: 1px;
      margin-right: 32px;
      width: 100%;

      background-color: rgba(251, 251, 251, 0.4);
    }

     @media screen and (min-width: 768px) {
   top: 32px;
  }

  `
      : `
    /* Styles for other pages */
    width: 100%;
    position: fixed;
    top: 0px;
    z-index: 100;
  `}
`;

export const Box = styled.div`
  position: relative;

  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    !props.homePath ? props.theme.main : "transparent"};

  @media screen and (min-width: 768px) {
    padding: ${(props) => (!props.homePath ? "30px 125px" : "20px 90px")};
  }

  @media (min-width: 1440px) {
  }
`;

export const BoxFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.homePath ? "92px" : "215px")};
`;

export const BurgerBtn = styled.svg`
  width: 28px;
  height: 28px;
  fill: none;
  stroke: ${globalColor.white};
  stroke-width: 1.5px;
  display: block;
  margin-right: 16px;
`;

export const ColorWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 170px;

  @media screen and (min-width: 768px) {
    top: 35%;
    left: 320px;
  }

  @media (min-width: 1440px) {
    top: 40%;
  }
`;
