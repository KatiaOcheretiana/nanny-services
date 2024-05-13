import { useState } from "react";
import { NannieDataType } from "../../types";
import { NannieItem } from "../NannieItem/NannieItem";
import { Button, List } from "./NannieList.styled";

type NannieListPropsType = {
  data: NannieDataType[];
};

export const NannieList = ({ data }: NannieListPropsType) => {
  const [loadedCount, setLoadedCount] = useState(3);
  const perPage = 4;

  const currentData = data.slice(0, loadedCount);

  const loadMore = () => {
    setLoadedCount(loadedCount + perPage);
  };

  return (
    <>
      <List>
        {currentData.map((nannie, index) => (
          <NannieItem key={index} nannieData={nannie} />
        ))}
      </List>
      {loadedCount < data.length && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </>
  );
};
