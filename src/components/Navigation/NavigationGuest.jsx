import {
  Box,
  BoxFeatures,
  BtnBox,
  LinkBox,
  LogInBtn,
  NavWrapper,
  NavigationLink,
  RegisterBtn,
  ServiceName,
} from "./Navigation.styled";

export const NavigationGest = () => {
  return (
    <NavWrapper>
      <Box>
        <div>
          <ServiceName>Nanny.Services</ServiceName>
        </div>
        <BoxFeatures>
          <LinkBox>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/nannies">Nannies</NavigationLink>
          </LinkBox>
          <BtnBox>
            <LogInBtn>Log In</LogInBtn>
            <RegisterBtn>Registration</RegisterBtn>
          </BtnBox>
        </BoxFeatures>
      </Box>
    </NavWrapper>
  );
};
