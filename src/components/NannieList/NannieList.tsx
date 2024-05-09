import { NannieDataType } from "../../types";
import { NannieItem } from "../NannieItem/NannieItem";

type NannieListPropsType = {
  data: NannieDataType[];
};

export const NannieList = ({ data }: NannieListPropsType) => {
  console.log(data);

  return (
    <ul style={{ marginTop: "100px" }}>
      {data.map((nannie, index) => (
        <NannieItem key={index} nannieData={nannie} />
      ))}
    </ul>
  );
};
