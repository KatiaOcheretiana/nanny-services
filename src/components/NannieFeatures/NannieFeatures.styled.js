import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const Wrapper = styled.li`
  border-radius: 24px;
  padding: 8px 16px;
  background-color: ${globalColor.featuresBg};
`;

export const OptionTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;

  > span {
    color: ${globalColor.textMain};
  }
`;
