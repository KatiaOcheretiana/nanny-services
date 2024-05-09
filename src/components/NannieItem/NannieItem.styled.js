import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const ListItem = styled.li`
  position: relative;

  max-width: 1184px;
  border-radius: 24px;
  background-color: ${globalColor.lightWhite};
  padding: 24px;
`;

export const ImageWrapper = styled.div`
  border: 2px solid rgba(240, 63, 59, 0.2);
  border-radius: 30px;
  width: 120px;
  height: 120px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    border-radius: 15px;
    width: 96px;
    height: 96px;
  }

  > svg {
    position: absolute;
    right: 10px;
    top: 8px;
  }
`;

export const LocationRatingPriceBox = styled.div`
  display: flex;
  gap: 32px;

  position: absolute;
  top: 24px;
  right: 98px;
`;

export const LocationRatingPriceContent = styled.p`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #11101c;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: -16px;
    width: 1px;
    background-color: rgba(17, 16, 28, 0.2);
  }
`;

export const PriceSpan = styled.span`
  color: #38cd3e;
`;
