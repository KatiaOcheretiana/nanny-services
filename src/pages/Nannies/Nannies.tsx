import { NannieList } from "../../components/NannieList/NannieList";
import { Container } from "../../styles/GlobalStyle";
import { Loader } from "../../components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNanniesData } from "../../redux/nannies/operations";
import {
  selectIsLoading,
  selectNanniesByFilter,
} from "../../redux/nannies/selectors";
import { AppDispatch } from "../../redux/store";
import { Filters } from "../../components/Filters/Filters";

const Nannies = () => {
  const dispatch: AppDispatch = useDispatch();

  const nanniesData = useSelector(selectNanniesByFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getNanniesData());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Loader />}
      {nanniesData && (
        <>
          <Filters />
          <NannieList data={nanniesData} />
        </>
      )}
      {!nanniesData && !isLoading && (
        <h3>Something went wrong, try to reload the page..</h3>
      )}
    </Container>
  );
};

export default Nannies;
