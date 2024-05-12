import { RootState } from "../store";

export const selectFavotiteNannies = (state: RootState): string[] =>
  state.favorite.favorite;
