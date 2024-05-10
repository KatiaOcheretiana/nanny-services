import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import {
  Avatar,
  BtnBox,
  BtnLogOut,
  LogInBtn,
  RegisterBtn,
  UserAvatarField,
  UserBox,
  UserName,
  Wrapper,
} from "./AccountFeatures.styled.";
import sprite from "../../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import { AppDispatch } from "../../../redux/store";

type AccountFeaturesPropsType = {
  styleDirection?: string;
  homePath?: boolean;
  handleOpenLogInModal: () => void;
  handleOpenRegisterModal: () => void;
};

export const AccountFeatures = ({
  styleDirection,
  homePath,
  handleOpenRegisterModal,
  handleOpenLogInModal,
}: AccountFeaturesPropsType) => {
  const dispatch: AppDispatch = useDispatch();

  const [authUser, setAuthUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setUserName(user?.displayName || "");
      } else {
        setAuthUser(null);
        setUserName("");
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <>
      {authUser ? (
        <Wrapper styleDirection={styleDirection}>
          <UserBox>
            <UserAvatarField>
              <Avatar height="16" width="16">
                <use href={sprite + "#icon-avatar"} />
              </Avatar>
            </UserAvatarField>
            <UserName>{userName}</UserName>
          </UserBox>

          <BtnLogOut onClick={() => dispatch(logOut())}>Log out</BtnLogOut>
        </Wrapper>
      ) : (
        <BtnBox styleDirection={styleDirection}>
          <LogInBtn onClick={handleOpenLogInModal} homePath={homePath}>
            Log In
          </LogInBtn>
          <RegisterBtn onClick={handleOpenRegisterModal} homePath={homePath}>
            Registration
          </RegisterBtn>
        </BtnBox>
      )}
    </>
  );
};