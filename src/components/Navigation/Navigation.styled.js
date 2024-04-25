import styled from "styled-components";
import { globalColor } from "../../styles/root";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
  width: 97.3%;
  position: fixed;

  &::after {
    position: absolute;
    content: "";

    height: 1px;
    margin-right: 32px;
    width: 100%;
    bottom: 0px;
    background-color: rgba(251, 251, 251, 0.4);
  }
`;

export const Box = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 20px 90px;
  }

  @media (min-width: 1440px) {
  }
`;
export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1440px) {
  }
`;

export const BoxFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 92px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ServiceName = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${globalColor.lightWhite};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const NavigationLink = styled(NavLink)`
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};
  text-decoration: none;
`;

export const LogInBtn = styled.button`
  border: ${globalColor.borderGray};
  border-radius: 30px;
  padding: 10px 20px;
  background-color: transparent;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};

  &:hover,
  &:focus {
    border: 1px solid ${globalColor.second};
  }

  transition: all 0.5s ease;

  @media screen and (min-width: 768px) {
    padding: 14px 39px;
  }
`;

export const RegisterBtn = styled.button`
  border-color: transparent;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: ${globalColor.main};

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};

  &:hover,
  &:focus {
    color: ${globalColor.main};
    background-color: ${globalColor.lightWhite};
  }

  transition: all 0.5s ease;

  @media screen and (min-width: 768px) {
    padding: 14px 40px;
  }
`;
