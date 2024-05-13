import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColorTheme } from "../../redux/colorTheme/selectors";
import { changeColor } from "../../redux/colorTheme/colorThemeSlice";
import styled from "styled-components";
import { AppDispatch } from "../../redux/store";

const Select = styled.select`
  background-color: ${(props) => props.theme.main};
  color: white;
`;

export const ChangeColor = () => {
  const dispatch: AppDispatch = useDispatch();
  const color = useSelector(selectColorTheme);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeColor(event.target.value as string));
  };

  return (
    <Select name="color" value={color} onChange={handleChange}>
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
    </Select>
  );
};
