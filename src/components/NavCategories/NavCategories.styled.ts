import styled from "styled-components";
import { globalColor } from "../../styles/root";
import { NavLink } from "react-router-dom";

type LinkBoxProps = {
  styleDirection?: string;
};

export const LinkBox = styled.div<LinkBoxProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: ${(props) => (props.styleDirection ? "column" : "row")};

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1440px) {
    /* Add your styles here if needed */
  }
`;

export const NavigationLink = styled(NavLink)`
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};
  text-decoration: none;
  position: relative;

  &.active {
    &::after {
      position: absolute;
      content: "";

      height: 8px;
      width: 8px;
      border-radius: 100%;
      bottom: -14px;
      right: 50%;
      background-color: ${globalColor.white};
    }
  }
`;
