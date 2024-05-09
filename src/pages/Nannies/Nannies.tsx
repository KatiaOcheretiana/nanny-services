import { useQuery } from "@tanstack/react-query";
import nanniesService from "../../services/nannies.service";
import { NannieList } from "../../components/NannieList/NannieList";
import { NannieDataType } from "../../types";
import { Container } from "../../styles/GlobalStyle";

// import {
//   collection,
//   query,
//   orderBy,
//   startAfter,
//   limit,
//   getDocs,
// } from "firebase/firestore";
// import { database } from "../../firebase";

const Nannies = () => {
  // // Query the first page of docs
  // const first = query(
  //   collection(database, "nannies"),
  //   // orderBy("population"),
  //   limit(3)
  // );
  // const documentSnapshots = await getDocs(first);

  // // Get the last visible document
  // const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  // console.log("last", lastVisible);

  // // Construct a new query starting at this document,
  // // get the next 25 cities.
  // const next = query(
  //   collection(database, "cities"),
  //   // orderBy("population"),
  //   startAfter(lastVisible),
  //   limit(3)
  // );

  const { isLoading, data } = useQuery({
    queryKey: ["nannies"],
    queryFn: nanniesService.getNanniesData,
  });

  const nannyDataArray: NannieDataType[] = data as NannieDataType[];

  return (
    <Container>
      {isLoading && <p>Loading....</p>}
      {nannyDataArray && <NannieList data={nannyDataArray} />}
      {!nannyDataArray && !isLoading && (
        <h3>Something went wrong, try to reload the page..</h3>
      )}
    </Container>
  );
};

export default Nannies;
