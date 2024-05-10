import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NannieDataType } from "../../types";
import { getNanniesData } from "./operations";

type NanniesSliceType = {
  nanniesData: NannieDataType[] | [];
  isLoading: boolean;
  error: null | string;
};

const initialState: NanniesSliceType = {
  nanniesData: [],
  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getNanniesData.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(
        getNanniesData.fulfilled,
        (state: Draft<NanniesSliceType>, action: PayloadAction<any>) => {
          state.nanniesData = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )

      .addCase(
        getNanniesData.rejected,
        (state: Draft<NanniesSliceType>, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload as string | null;
        }
      );
  },
});

export const nanniesReducer = nanniesSlice.reducer;
