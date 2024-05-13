import { useState } from "react";
import {
  Box,
  BoxFeatures,
  BurgerBtn,
  ColorWrapper,
  NavWrapperHomePage,
} from "./Navigation.styled";
import MediaQuery from "react-responsive";
import sprite from "../../images/sprite.svg";
import MobileMenu from "./MobileMenu.jsx/MobileMenu";
import ModalWindow from "../ModalWindow/ModalWindow";
import { SignUp } from "../Auth/SignUp/SignUp";
import { SignIn } from "../Auth/SignIn/SignIn";
import { AccountFeatures } from "../Auth/AccountFeatures/AccountFeatures";
import { NavCategories } from "../NavCategories/NavCategories";
import { Logo } from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import { ChangeColor } from "../ChangeColor/ChangeColor";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
    document.body.style.overflow = "visible";
  };

  const [isModalLogInOpen, setIsModalLogInOpen] = useState(false);

  const handleOpenLogInModal = () => {
    setIsModalLogInOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseLogInModal = () => {
    setIsModalLogInOpen(false);
    document.body.style.overflow = "visible";
  };

  const location = useLocation();

  const homePath = location.pathname === "/";

  return (
    <>
      <NavWrapperHomePage homePath={homePath}>
        <Box homePath={homePath}>
          <Logo />
          <MediaQuery minWidth={1440}>
            <BoxFeatures homePath={homePath}>
              <NavCategories />
              <AccountFeatures
                handleOpenLogInModal={handleOpenLogInModal}
                handleOpenRegisterModal={handleOpenRegisterModal}
                homePath={homePath}
              />
            </BoxFeatures>
          </MediaQuery>

          <MediaQuery maxWidth={1439}>
            <BurgerBtn onClick={toggleMenu}>
              <use href={`${sprite}#icon-menu`} />
            </BurgerBtn>
          </MediaQuery>
        </Box>
        <ColorWrapper>
          <ChangeColor />
        </ColorWrapper>

        <MediaQuery maxWidth={1439}>
          {isMenuOpen && (
            <MobileMenu
              onClick={toggleMenu}
              openRegister={handleOpenRegisterModal}
              openLogIn={handleOpenLogInModal}
            />
          )}
        </MediaQuery>
      </NavWrapperHomePage>
      {isRegisterModalOpen && (
        <ModalWindow
          isOpen={isRegisterModalOpen}
          onRequestClose={handleCloseRegisterModal}
          heightParameter="579px"
        >
          <SignUp onRequestClose={handleCloseRegisterModal} />
        </ModalWindow>
      )}

      {isModalLogInOpen && (
        <ModalWindow
          isOpen={isModalLogInOpen}
          onRequestClose={handleCloseLogInModal}
          heightParameter="489px"
        >
          <SignIn onRequestClose={handleCloseLogInModal} />
        </ModalWindow>
      )}
    </>
  );
};
