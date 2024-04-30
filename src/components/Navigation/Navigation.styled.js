import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const NavWrapperHomePage = styled.div`
  ${({ homePath }) =>
    homePath
      ? `
    /* Styles for home page */
    width: 100%;
    position: fixed;
    top: 16px;
    z-index: 1;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      margin-right: 32px;
      width: 100%;
      bottom: 0px;
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
 background-color:  ${globalColor.main};
  `}
`;

export const Box = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: ${(props) => (props.homePath ? "30px 125px" : "20px 90px")};
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
