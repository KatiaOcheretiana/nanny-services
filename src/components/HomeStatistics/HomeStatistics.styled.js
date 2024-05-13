import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const AddInfoWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    position: absolute;
    right: 50px;
    bottom: 50px;

    border-radius: 20px;
    padding: 32px;

    display: flex;
    background-color: ${globalColor.lightWhite};
    gap: 17px;
  }
`;

export const SvgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main};

  border-radius: 13px;
  width: 54px;
  height: 54px;
`;

export const AddInfoTitle = styled.p`
  font-size: 16px;
  color: ${globalColor.notActiveSelect};
  margin-bottom: 8px;
`;

export const AddInfoNumber = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${globalColor.textMain};
`;
