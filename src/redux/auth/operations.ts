import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, getCurrentUser } from "../../firebase";
import { UserType } from "../../components/Auth/SignUp/SignUp";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

export const register = createAsyncThunk(
  "auth/register",
  async (userData: UserType, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      ).then(() => {
        if (auth.currentUser !== null) {
          updateProfile(auth.currentUser, { displayName: userData.name });
          toast.success("Successfully registered! Welcome!");
        }
      });
    } catch (error: any) {
      toast.error("Your email or password is wrong! Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (userData: UserType, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      toast.success("Welcome!");
      const currentUser = await getCurrentUser();
      return currentUser;
    } catch (error: any) {
      toast.error("Your email or password is wrong! Please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    signOut(auth);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const currentUser = await getCurrentUser();
      return currentUser.displayName;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
