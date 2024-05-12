import { useSelector } from "react-redux";
import { selectFavotiteNannies } from "../../redux/favorite/selectors";
import { selectNanniesData } from "../../redux/nannies/selectors";
import { Container } from "../../styles/GlobalStyle";
import { NannieList } from "../../components/NannieList/NannieList";

const Favorites = () => {
  const favoriteNanniesName = useSelector(selectFavotiteNannies);
  const allNannies = useSelector(selectNanniesData);

  const favorites = allNannies.filter((item) =>
    favoriteNanniesName.includes(item.name)
  );

  return (
    <Container>
      {favorites.length > 0 ? (
        <NannieList data={favorites} />
      ) : (
        <p>Your favorite list is empty.</p>
      )}
    </Container>
  );
};

export default Favorites;
