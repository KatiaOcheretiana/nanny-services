import { NannieDataType } from "../../types";
import { NannieItem } from "../NannieItem/NannieItem";
import { List } from "./NannieList.styled";

type NannieListPropsType = {
  data: NannieDataType[];
};

export const NannieList = ({ data }: NannieListPropsType) => {
  return (
    <List>
      {data.map((nannie, index) => (
        <NannieItem key={index} nannieData={nannie} />
      ))}
    </List>
  );
};
