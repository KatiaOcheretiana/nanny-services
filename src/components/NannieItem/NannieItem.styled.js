import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const ListItem = styled.li`
  position: relative;

  display: grid;
  grid-template-columns: auto;
  gap: 22px;

  max-width: 1184px;
  border-radius: 24px;
  background-color: ${globalColor.lightWhite};
  padding: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }
`;

export const ImageWrapper = styled.div`
  border: 2px solid ${globalColor.mainBackground};
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

export const NanieContacts = styled.div`
  display: grid;
  grid-template-columns: auto;

  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    grid-template-columns: auto auto;
    align-items: start;
    justify-content: space-between;

    margin-bottom: 26px;
  }
`;

export const LocationRatingPriceBox = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 70px;
  }
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

  @media screen and (min-width: 768px) {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: -16px;
      width: 1px;
      background-color: rgba(17, 16, 28, 0.2);
    }
  }
`;

export const PriceSpan = styled.span`
  color: #38cd3e;
`;

export const Position = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;

  margin-bottom: 8px;
`;

export const Name = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: ${globalColor.textMain};

  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 26px;
`;

export const TextAbout = styled.p`
  font-size: 16px;
  line-height: 125%;
  color: rgba(17, 16, 28, 0.5);

  margin-bottom: 12px;
`;

export const ButtonReadMore = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${globalColor.textMain};

  border: none;
  background-color: transparent;
`;

export const ButtonOpenModal = styled.button`
  border-radius: 30px;
  padding: 14px 28px;

  border-color: transparent;
  background-color: ${globalColor.main};

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};
`;

export const ButtonLikeStyled = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;
