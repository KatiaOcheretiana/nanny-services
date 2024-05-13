import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { changeFilter } from "../../redux/filter/filterSlice";
import {
  Option,
  OptionsContainer,
  OptionsList,
  Selector,
  Title,
} from "./Filters.styled";

import sprite from "../../images/sprite.svg";

export const Filters = () => {
  const dispatch: AppDispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (value: string) => {
    dispatch(changeFilter(value));
    setShowOptions(false);
  };

  return (
    <OptionsContainer>
      <Title>Filters</Title>
      <Selector onClick={() => setShowOptions(!showOptions)}>
        <p>{filter}</p>
        <svg height="20" width="20">
          <use href={sprite + "#icon-chevron-down"} fill="white" />
        </svg>
      </Selector>
      {showOptions && (
        <OptionsList>
          <Option
            onClick={() => handleChange("A to Z")}
            selected={filter === "A to Z"}
          >
            A to Z
          </Option>
          <Option
            onClick={() => handleChange("Z to A")}
            selected={filter === "Z to A"}
          >
            Z to A
          </Option>
          <Option
            onClick={() => handleChange("Less than 10$")}
            selected={filter === "Less than 10$"}
          >
            Less than 10$
          </Option>
          <Option
            onClick={() => handleChange("Greater than 10$")}
            selected={filter === "Greater than 10$"}
          >
            Greater than 10$
          </Option>
          <Option
            onClick={() => handleChange("Popular")}
            selected={filter === "Popular"}
          >
            Popular
          </Option>
          <Option
            onClick={() => handleChange("Show all")}
            selected={filter === "Show all"}
          >
            Show all
          </Option>
        </OptionsList>
      )}
    </OptionsContainer>
  );
};
