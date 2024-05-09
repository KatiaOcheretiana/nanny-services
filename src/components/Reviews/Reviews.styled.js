import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const List = styled.ul`
  display: flex;
  gap: 25px;
  flex-direction: column;

  margin: 50px 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Avatar = styled.div`
  border-radius: 100px;
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${globalColor.main};
  background-color: ${globalColor.mainBackground};

  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #f03f3b;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const ReviewerInfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: ${globalColor.textMain};

  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Comment = styled.p`
  font-size: 16px;
  line-height: 125%;
  color: ${globalColor.textSecondary};
`;
