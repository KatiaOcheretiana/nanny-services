import { NannieList } from "../../components/NannieList/NannieList";
import { Container } from "../../styles/GlobalStyle";
import { Loader } from "../../components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNanniesData } from "../../redux/nannies/operations";
import {
  selectIsLoading,
  selectNanniesData,
} from "../../redux/nannies/selectors";
import { AppDispatch } from "../../redux/store";

const Nannies = () => {
  const dispatch: AppDispatch = useDispatch();

  const nanniesData = useSelector(selectNanniesData);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getNanniesData());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Loader />}
      {nanniesData && <NannieList data={nanniesData} />}
      {!nanniesData && !isLoading && (
        <h3>Something went wrong, try to reload the page..</h3>
      )}
    </Container>
  );
};

export default Nannies;
