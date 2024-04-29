import sprite from "../../images/sprite.svg";
import {
  BgImage,
  BoxWrapper,
  Container,
  ContentWrapper,
  LinkBtn,
  PageWrapper,
  Text,
  Title,
} from "./Home.styled";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/nannies");
  };

  return (
    <Container>
      <PageWrapper>
        <BoxWrapper>
          <ContentWrapper>
            <Title>Make Life Easier for the Family:</Title>
            <Text>Find Babysitters Online for All Occasions</Text>
          </ContentWrapper>

          <LinkBtn onClick={getStarted}>
            <p>Get started</p>
            <svg height="17" width="15">
              <use href={sprite + "#icon-arrow"} />
            </svg>
          </LinkBtn>
        </BoxWrapper>

        <BgImage></BgImage>
      </PageWrapper>
    </Container>
  );
};

export default Home;
