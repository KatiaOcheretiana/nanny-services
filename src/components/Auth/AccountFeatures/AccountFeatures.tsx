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
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import { AppDispatch } from "../../../redux/store";
import { selectCurrentUser } from "../../../redux/auth/selectors";

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

  const name = useSelector(selectCurrentUser);

  const [authUser, setAuthUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>(name);

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
      {authUser || userName ? (
        <Wrapper styleDirection={styleDirection}>
          <UserBox>
            <UserAvatarField>
              <Avatar height="16" width="16">
                <use href={sprite + "#icon-avatar"} />
              </Avatar>
            </UserAvatarField>
            <UserName>{authUser ? authUser.displayName : userName}</UserName>
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
