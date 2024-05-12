import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors";
import { LinkBox, NavigationLink } from "./NavCategories.styled";

type NavCategoriesPropsType = {
  styleDirection?: string;
};

export const NavCategories = ({ styleDirection }: NavCategoriesPropsType) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <LinkBox styleDirection={styleDirection}>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/nannies">Nannies</NavigationLink>
      {currentUser && (
        <NavigationLink to="/favorites">Favorites</NavigationLink>
      )}
    </LinkBox>
  );
};
