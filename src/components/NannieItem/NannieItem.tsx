import { NannieDataType } from "../../types";
import sprite from "../../images/sprite.svg";
import { NannieFeatures } from "../NannieFeatures/NannieFeatures";
import { Reviews } from "../Reviews/Reviews";
import {
  ButtonLikeStyled,
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
import { useEffect, useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Application } from "../Application/Application";
import { ButtonLike } from "../ButtonLike/ButtonLike";

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

  const [heightModalParameter, setHeightModalParameter] = useState<string>("");
  const [scrollModalParameter, setScrollModalParameter] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      const newHeightParameter = window.innerWidth >= 1630 ? "900px" : "86vh";
      setHeightModalParameter(newHeightParameter);

      const newScrollParameter = window.innerWidth >= 1830 ? "hidden" : "auto";
      setScrollModalParameter(newScrollParameter);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ListItem>
      <ImageWrapper>
        <img src={nannieData.avatar_url} width={96} alt={nannieData.name} />
        <svg width={14} height={14}>
          <use href={sprite + "#icon-status-online"} />
        </svg>
      </ImageWrapper>
      <ButtonLikeStyled>
        <ButtonLike nannieName={nannieData.name} />
      </ButtonLikeStyled>
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
              Rating: {nannieData.rating.toFixed(1)}
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
          heightParameter={heightModalParameter}
          width="599px"
          scroll={scrollModalParameter}
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
