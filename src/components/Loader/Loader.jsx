import { PropagateLoader } from "react-spinners";
import { globalColor } from "../../styles/root";

export const Loader = () => {
  return (
    <PropagateLoader
      color={globalColor.textGray}
      cssOverride={{
        position: "absolute",
        top: "50%",
        right: "50%",
      }}
    />
  );
};
