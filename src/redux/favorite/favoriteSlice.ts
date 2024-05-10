import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export const storageKey = "favorite";

type FavoriteSliceType = {
  favorite: string[];
};

const getInitialState = (): string[] => {
  const favorite = localStorage.getItem(storageKey);
  return favorite !== null ? JSON.parse(favorite) : [];
};

const initialState: FavoriteSliceType = {
  favorite: getInitialState(),
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (
      state: Draft<FavoriteSliceType>,
      action: PayloadAction<string>
    ) => {
      state.favorite.push(action.payload);
    },
    deleteFromFavorite: (
      state: Draft<FavoriteSliceType>,
      action: PayloadAction<string>
    ) => {
      state.favorite = state.favorite.filter(
        (nannie) => nannie !== action.payload
      );
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;
