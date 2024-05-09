import { ReviewsType } from "../../types";
import sprite from "../../images/sprite.svg";

type ReviewsPropsType = {
  reviewsData: ReviewsType[];
};

export const Reviews = ({ reviewsData }: ReviewsPropsType) => {
  return (
    <ul>
      {reviewsData.map(({ comment, rating, reviewer }, index) => (
        <li key={index}>
          <div>
            <div>{reviewer.charAt(0)}</div>
            <p>{reviewer}</p>
            <p>
              <svg width={16} height={16}>
                <use href={sprite + "#icon-star"} />
              </svg>
              {rating}
            </p>
          </div>
          <p>{comment}</p>
        </li>
      ))}
    </ul>
  );
};
