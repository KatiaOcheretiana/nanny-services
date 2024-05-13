import styled from "styled-components";
import { globalColor } from "../../styles/root";
import bg_1x from "../../images/bg_1x.png";
import bg_2x from "../../images/bg_2x.png";

export const Container = styled.div`
  padding: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const PageWrapper = styled.section`
  background-color: ${(props) => props.theme.main};
  border-radius: 30px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 600px;
  position: relative;

  @media screen and (min-width: 370px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
  }
`;

export const BoxWrapper = styled.div`
  margin: 190px 28px 100px 26px;
  @media screen and (min-width: 768px) {
    margin: 200px 38px 162px 55px;
  }

  @media (min-width: 1440px) {
    margin: 250px 68px 162px 85px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 517px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: ${globalColor.lightWhite};
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 107%;
  letter-spacing: -0.02em;
  color: ${globalColor.lightWhite};
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const LinkBtn = styled.button`
  border: ${globalColor.borderGray};
  background-color: transparent;
  border-radius: 30px;
  box-sizing: border-box;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${globalColor.lightWhite};
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 230px;
  height: 60px;

  & > svg {
    transition: transform 0.3s ease;
  }

  &:hover > svg,
  &:focus > svg {
    transform: rotate(53deg);
    transition: transform 0.3s ease;
  }
`;

export const BgImage = styled.div`
  display: none;

  @media screen and (min-width: 370px) {
    display: block;
    background-color: ${globalColor.lightWhite};
    background-repeat: no-repeat;

    width: 100%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

    background-image: image-set(url(${bg_1x}) 1x, url(${bg_2x}) 2x);
    background-size: cover;
  }
`;
