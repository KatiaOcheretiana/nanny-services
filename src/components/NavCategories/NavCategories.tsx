import { auth } from "../../firebase";
import { LinkBox, NavigationLink } from "./NavCategories.styled";

type NavCategoriesPropsType = {
  styleDirection?: string;
};

export const NavCategories = ({ styleDirection }: NavCategoriesPropsType) => {
  return (
    <LinkBox styleDirection={styleDirection}>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/nannies">Nannies</NavigationLink>
      {auth.currentUser && (
        <NavigationLink to="/favorites">Favorites</NavigationLink>
      )}
    </LinkBox>
  );
};
