import { NannieDataType } from "../../types";
import sprite from "../../images/sprite.svg";
import { NannieFeatures } from "../NannieFeatures/NannieFeatures";
import { Reviews } from "../Reviews/Reviews";
import {
  ButtonOpenModal,
  ButtonReadMore,
  FeaturesList,
  ImageWrapper,
  ListItem,
  LocationRatingPriceBox,
  LocationRatingPriceContent,
  Name,
  NanieContacts,
  Position,
  PriceSpan,
  TextAbout,
} from "./NannieItem.styled";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Application } from "../Application/Application";

type NannieItemPropsType = {
  nannieData: NannieDataType;
};

export const NannieItem = ({ nannieData }: NannieItemPropsType) => {
  const [showReviews, setShowReviews] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseLogInModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "visible";
  };

  const getAge = (birthdayDate: string): number => {
    const birthday = new Date(birthdayDate);
    const ageInMillis = Date.now() - birthday.getTime();
    const age = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  };

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
        <NanieContacts>
          <div>
            <Position>Nanny</Position>
            <Name>{nannieData.name}</Name>
          </div>
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
              Rating: {nannieData.rating}
            </LocationRatingPriceContent>
            <LocationRatingPriceContent>
              Price / 1 hour:
              <PriceSpan> {nannieData.price_per_hour}$</PriceSpan>
            </LocationRatingPriceContent>
          </LocationRatingPriceBox>
        </NanieContacts>
        <FeaturesList>
          <NannieFeatures
            age={true}
            title="Age:"
            text={getAge(nannieData.birthday)}
          />
          <NannieFeatures title="Experience:" text={nannieData.experience} />
          <NannieFeatures title="Kids Age:" text={nannieData.kids_age} />
          <NannieFeatures title="Characters:" text={characters} />
          <NannieFeatures title="Education:" text={nannieData.education} />
        </FeaturesList>

        <TextAbout>{nannieData.about}</TextAbout>
        {!showReviews ? (
          <ButtonReadMore onClick={() => setShowReviews(true)}>
            Read more
          </ButtonReadMore>
        ) : (
          <>
            <Reviews reviewsData={nannieData.reviews} />
            <ButtonOpenModal onClick={handleOpenModal}>
              Make an appointment
            </ButtonOpenModal>
          </>
        )}
      </div>

      {isModalOpen && (
        <ModalWindow
          isOpen={isModalOpen}
          onRequestClose={handleCloseLogInModal}
          heightParameter="100vh"
          width="599px"
        >
          <Application
            onRequestClose={handleCloseLogInModal}
            nannieImg={nannieData.avatar_url}
            nannieName={nannieData.name}
          />
        </ModalWindow>
      )}
    </ListItem>
  );
};
