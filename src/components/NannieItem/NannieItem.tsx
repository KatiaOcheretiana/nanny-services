import { NannieDataType } from "../../types";
import sprite from "../../images/sprite.svg";
import { NannieFeatures } from "../NannieFeatures/NannieFeatures";
import { Reviews } from "../Reviews/Reviews";
import {
  ImageWrapper,
  ListItem,
  LocationRatingPriceBox,
  LocationRatingPriceContent,
  PriceSpan,
} from "./NannieItem.styled";

type NannieItemPropsType = {
  nannieData: NannieDataType;
};

export const NannieItem = ({ nannieData }: NannieItemPropsType) => {
  const getAge = (birthdayDate: string): number => {
    const birthday = new Date(birthdayDate);
    const ageInMillis = Date.now() - birthday.getTime();
    const age = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  };

  console.log(nannieData.reviews);

  const characters = nannieData.characters
    .map((item) => item.charAt(0).toUpperCase() + item.substring(1))
    .join(", ");

  return (
    <ListItem>
      <ImageWrapper>
        <img src={nannieData.avatar_url} width={96} alt={nannieData.name} />
        <svg width={14} height={14}>
          <use href={sprite + "#icon-status-online"} />
        </svg>
      </ImageWrapper>
      <div>
        <LocationRatingPriceBox>
          <LocationRatingPriceContent>
            <svg width={16} height={16}>
              <use
                href={sprite + "#icon-location"}
                style={{ fill: "transparent", stroke: "#11101c" }}
              />
            </svg>
            {nannieData.location}
          </LocationRatingPriceContent>
          <LocationRatingPriceContent>
            <svg width={16} height={16}>
              <use href={sprite + "#icon-star"} />
            </svg>
            Rating:
            {nannieData.rating}
          </LocationRatingPriceContent>
          <LocationRatingPriceContent>
            Price / 1 hour:
            <PriceSpan> {nannieData.price_per_hour} $</PriceSpan>
          </LocationRatingPriceContent>
        </LocationRatingPriceBox>

        <p>Nanny</p>
        <h3>{nannieData.name}</h3>
        <div>
          <NannieFeatures title="Age:" text={getAge(nannieData.birthday)} />
          <NannieFeatures title="Experience:" text={nannieData.experience} />
          <NannieFeatures title="Kids Age:" text={nannieData.kids_age} />
          <NannieFeatures title="Characters:" text={characters} />
          <NannieFeatures title="Education:" text={nannieData.education} />
        </div>

        <p>{nannieData.about}</p>
        <Reviews reviewsData={nannieData.reviews} />
      </div>
    </ListItem>
  );
};
