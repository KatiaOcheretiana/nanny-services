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
import { NavigationGest } from "../../components/Navigation/NavigationGuest";

const Home = () => {
  return (
    <Container>
      <NavigationGest />
      <PageWrapper>
        <BoxWrapper>
          <ContentWrapper>
            <Title>Make Life Easier for the Family:</Title>
            <Text>Find Babysitters Online for All Occasions</Text>
          </ContentWrapper>

          <LinkBtn>
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
