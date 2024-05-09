import { ReviewsType } from "../../types";
import sprite from "../../images/sprite.svg";
import {
  Avatar,
  Comment,
  List,
  ListItem,
  ReviewerInfo,
  ReviewerInfoText,
} from "./Reviews.styled";

type ReviewsPropsType = {
  reviewsData: ReviewsType[];
};

export const Reviews = ({ reviewsData }: ReviewsPropsType) => {
  return (
    <List>
      {reviewsData.map(({ comment, rating, reviewer }, index) => (
        <ListItem key={index}>
          <ReviewerInfo>
            <Avatar>{reviewer.charAt(0)}</Avatar>
            <div>
              <ReviewerInfoText>{reviewer}</ReviewerInfoText>
              <ReviewerInfoText>
                <svg width={16} height={16}>
                  <use href={sprite + "#icon-star"} />
                </svg>
                {rating}
              </ReviewerInfoText>
            </div>
          </ReviewerInfo>
          <Comment>{comment}</Comment>
        </ListItem>
      ))}
    </List>
  );
};
