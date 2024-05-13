import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export const storageKey = "favorite";

type ColorThemeSliceType = {
  color: string;
};

const initialState: ColorThemeSliceType = {
  color: "red",
};

const colorThemeSlice = createSlice({
  name: "colorTheme",
  initialState,
  reducers: {
    changeColor: (
      state: Draft<ColorThemeSliceType>,
      action: PayloadAction<string>
    ) => {
      state.color = action.payload;
    },
  },
});

export const colorThemeReducer = colorThemeSlice.reducer;
export const { changeColor } = colorThemeSlice.actions;
