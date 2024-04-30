import {
  AddInfoNumber,
  AddInfoTitle,
  AddInfoWrapper,
  SvgBox,
} from "./HomeStatistics.styled";

import sprite from "../../images/sprite.svg";

export const HomeStatistics = () => {
  return (
    <AddInfoWrapper>
      <SvgBox>
        <svg height="30" width="30">
          <use href={sprite + "#icon-check-arrow"} />
        </svg>
      </SvgBox>
      <div>
        <AddInfoTitle>Experienced nannies</AddInfoTitle>
        <AddInfoNumber>15,000</AddInfoNumber>
      </div>
    </AddInfoWrapper>
  );
};
