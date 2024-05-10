import { RootState } from "../store";

export const selectCurrentUser = (state: RootState): any => state.auth.user;
