import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const ServiceName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${globalColor.lightWhite};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
