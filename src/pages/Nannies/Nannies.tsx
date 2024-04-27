import { useQuery } from "@tanstack/react-query";
import nanniesService from "../../services/nannies.service";
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
} from "firebase/firestore";
import { database } from "../../firebase";
type NannyType = {
  name: string;
};

const Nannies = () => {
  // Query the first page of docs
  const first = query(
    collection(database, "nannies"),
    // orderBy("population"),
    limit(3)
  );
  const documentSnapshots = await getDocs(first);

  // Get the last visible document
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  console.log("last", lastVisible);

  // Construct a new query starting at this document,
  // get the next 25 cities.
  const next = query(
    collection(database, "cities"),
    // orderBy("population"),
    startAfter(lastVisible),
    limit(3)
  );

  const { isLoading, isSuccess, error, data } = useQuery({
    queryKey: ["nannies"],
    queryFn: () => nanniesService.getNanniesData(),
  });

  const nannyDataArray: NannyType[] = data as NannyType[];

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {error && <p>Error: {error.message}</p>}
      {isSuccess && nannyDataArray && (
        <div>
          {nannyDataArray.map((item: NannyType, index: number) => (
            <div key={index}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nannies;

// <div>
//   {nanniesData.map((nanny, index) => (
//     <div key={index}>
//       <p>{nanny.name}</p>{" "}
//     </div>
//   ))}
// </div>

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const dbRef = ref(database, "nannies");
//         onValue(dbRef, (snapshot) => {
//           const data = snapshot.val();

//           if (data) {
//             setNanniesData(Object.values(data));
//           } else {
//             setNanniesData([]);
//           }
//         });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
