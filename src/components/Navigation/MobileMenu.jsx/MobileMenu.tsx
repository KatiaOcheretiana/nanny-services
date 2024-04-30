import { useEffect } from "react";
import sprite from "../../../images/sprite.svg";

import {
  BackdropMenu,
  CloseBtn,
  IconClose,
  MenuContainer,
  NavContainer,
} from "./MobileMenu.styled";

import { NavCategories } from "../../NavCategories/NavCategories";
import { AccountFeatures } from "../../Auth/AccountFeatures/AccountFeatures";

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
          <NavCategories styleDirection="column" />

          <AccountFeatures
            styleDirection="column"
            handleOpenLogInModal={handleLogInClick}
            handleOpenRegisterModal={handleRegisterClick}
          />
        </NavContainer>
      </MenuContainer>
    </BackdropMenu>
  );
};
export default MobileMenu;
