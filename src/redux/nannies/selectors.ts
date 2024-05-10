import { RootState } from "../store";

export const selectNanniesData = (state: RootState) =>
  state.nannies.nanniesData;

export const selectIsLoading = (state: RootState) => state.nannies.isLoading;
