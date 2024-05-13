import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

type FilterSliceType = {
  filter: string;
};

const initialState: FilterSliceType = {
  filter: "Show all",
};

const filterSlice = createSlice({
  name: "filterState",
  initialState,
  reducers: {
    changeFilter: (
      state: Draft<FilterSliceType>,
      action: PayloadAction<string>
    ) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
