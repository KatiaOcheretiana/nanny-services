import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { getUser, logIn, logOut, register } from "./operations";

type InitialStateProps = {
  user: string;
  isLoading: boolean;
  error: null | string;
};

const initialState: InitialStateProps = {
  user: "",
  isLoading: false,
  error: null,
};

const handlePending = (state: Draft<InitialStateProps>) => {
  state.isLoading = true;
};

const handleFulfilled = (state: Draft<InitialStateProps>) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (
  state: Draft<InitialStateProps>,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => handlePending(state))
      .addCase(register.fulfilled, (state) => handleFulfilled(state))
      .addCase(register.rejected, (state, action: PayloadAction<any>) =>
        handleRejected(state, action)
      )

      .addCase(logIn.pending, (state) => handlePending(state))
      .addCase(logIn.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.user = action.payload;
      })
      .addCase(logIn.rejected, (state, action: PayloadAction<any>) =>
        handleRejected(state, action)
      )

      .addCase(logOut.pending, (state) => handlePending(state))
      .addCase(logOut.fulfilled, (state) => {
        handleFulfilled(state);
        state.user = "";
      })
      .addCase(logOut.rejected, (state, action: any) =>
        handleRejected(state, action)
      )

      .addCase(getUser.pending, (state) => handlePending(state))
      .addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
        handleFulfilled(state);
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<any>) =>
        handleRejected(state, action)
      );
  },
});

export const authReducer = authSlice.reducer;
