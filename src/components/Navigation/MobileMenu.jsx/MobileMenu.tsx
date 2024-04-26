import { useEffect } from "react";
import sprite from "../../../images/sprite.svg";

import {
  BackdropMenu,
  CloseBtn,
  IconClose,
  MenuContainer,
  NavBtn,
  NavContainer,
  NavLinks,
} from "./MobileMenu.styled";
import { LogInBtn, NavigationLink, RegisterBtn } from "../Navigation.styled";

type MobileMenuPropsType = {
  onClick: () => void;
  openRegister: () => void;
  openLogIn: () => void;
};

const MobileMenu = ({
  onClick,
  openRegister,
  openLogIn,
}: MobileMenuPropsType) => {
  //   const dispatch = useDispatch();

  //   const handleLogOut = () => {
  //     dispatch(logOut());
  //     onClick();
  //   };

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);

  const handleLogInClick = () => {
    openLogIn();
    handleCloseClick();
  };

  const handleRegisterClick = () => {
    openRegister();
    handleCloseClick();
  };

  return (
    <BackdropMenu onClick={handleBackdropClick}>
      <MenuContainer>
        <CloseBtn onClick={handleCloseClick}>
          <IconClose>
            <use href={`${sprite}#icon-x`} />
          </IconClose>
        </CloseBtn>
        <NavContainer>
          <NavLinks>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/nannies">Nannies</NavigationLink>
          </NavLinks>
          <NavBtn>
            <LogInBtn onClick={handleLogInClick}>Log In</LogInBtn>
            <RegisterBtn onClick={handleRegisterClick}>
              Registration
            </RegisterBtn>
          </NavBtn>
        </NavContainer>
      </MenuContainer>
    </BackdropMenu>
  );
};
export default MobileMenu;
