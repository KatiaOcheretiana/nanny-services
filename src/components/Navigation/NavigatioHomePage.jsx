import { useState } from "react";
import {
  Box,
  BoxFeatures,
  BtnBox,
  BurgerBtn,
  LinkBox,
  LogInBtn,
  NavWrapperHomePage,
  NavigationLink,
  RegisterBtn,
  ServiceName,
} from "./Navigation.styled";
import MediaQuery from "react-responsive";
import sprite from "../../images/sprite.svg";
import MobileMenu from "./MobileMenu.jsx/MobileMenu";
import ModalWindow from "../ModalWindow/ModalWindow";
import { SignUp } from "../Auth/SignUp/SignUp";
import { SignIn } from "../Auth/SignIn/SignIn";
import { auth } from "../../firebase";
import { AuthDetails } from "../Auth/AuthDetail";

export const NavigatioHomePage = () => {
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

  return (
    <>
      <NavWrapperHomePage>
        <Box>
          <div>
            <ServiceName>Nanny.Services</ServiceName>
          </div>
          <MediaQuery minWidth={1440}>
            <BoxFeatures>
              <LinkBox>
                <NavigationLink to="/">Home</NavigationLink>
                <NavigationLink to="/nannies">Nannies</NavigationLink>
              </LinkBox>
              {auth.currentUser ? (
                // <button type="submit" onClick={() => signOut(auth)}>
                //   log out {auth.currentUser.displayName}{" "}
                // </button>

                <AuthDetails />
              ) : (
                <BtnBox>
                  <LogInBtn onClick={handleOpenLogInModal}>Log In</LogInBtn>
                  <RegisterBtn onClick={handleOpenRegisterModal}>
                    Registration
                  </RegisterBtn>
                </BtnBox>
              )}
            </BoxFeatures>
          </MediaQuery>

          <MediaQuery maxWidth={1439}>
            <BurgerBtn onClick={toggleMenu}>
              <use href={`${sprite}#icon-menu`} />
            </BurgerBtn>
          </MediaQuery>
        </Box>
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
