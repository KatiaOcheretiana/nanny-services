import { RootState } from "../store";

export const selectColorTheme = (state: RootState): string =>
  state.colorTheme.color;
