import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { selectFavotiteNannies } from "../../redux/favorite/selectors";
import { useEffect, useState } from "react";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../../redux/favorite/favoriteSlice";
import { ButtonLikeWrapper, IconLike } from "./ButtonLike.styled";
import sprite from "../../images/sprite.svg";
import { selectCurrentUser } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

type ButtonLikeProps = {
  nannieName: string;
};

export const ButtonLike = ({ nannieName }: ButtonLikeProps) => {
  const dispatch: AppDispatch = useDispatch();

  const favoriteNannies = useSelector(selectFavotiteNannies);

  const user = useSelector(selectCurrentUser);

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    setIsLike(favoriteNannies.includes(nannieName));
  }, [favoriteNannies, nannieName]);

  const handleLike = () => {
    if (user) {
      if (isLike) {
        dispatch(deleteFromFavorite(nannieName));
      } else {
        dispatch(addToFavorite(nannieName));
      }
    } else {
      toast.error(
        "Only registered users can perform this action. Please register."
      );
    }
  };

  return (
    <ButtonLikeWrapper onClick={handleLike}>
      <IconLike isLike={isLike}>
        <use href={sprite + "#icon-like"} />
      </IconLike>
    </ButtonLikeWrapper>
  );
};
