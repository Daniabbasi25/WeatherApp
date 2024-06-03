import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { auth, db } from "../../../firebaseConfig.js";
import { LoginData, SignUpData, UpdateEmailData, UpdateUserData } from "@model";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail
} from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { showMessage } from "react-native-flash-message";

export const getUserInfo = createAsyncThunk(
  "getUserInfo",
  async (_, { rejectWithValue }) => {
    try {
      //axios request
      return {
        user: {},
      };
    } catch (error: any) {
      const message = error?.data ?? "Failed to fetch user info!";

      return rejectWithValue(message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "loginUser",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const authRes = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const docRef = doc(db, "users", authRes.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        showMessage({
          type: "success",
          message: "Login successful",
        });
        return {
          user: docSnap.data(),
        };
      } else {
        // docSnap.data() will be undefined in this case
        throw new Error("Something went wrong");
      }
    } catch (error: any) {
      const message = error?.data ?? "Failed to Login!";
      showMessage({
        type: "danger",
        message: "some thing went wrong Please try again!",
      });
      return rejectWithValue(message);
    }
  }
);
export const signUpUser = createAsyncThunk(
  "signUpUser",
  async (data: SignUpData, { rejectWithValue }) => {
    try {
      //axios request
      const authres = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const USERDATA = {
        id: authres.user.uid,
        lastName: data.lastName,
        firstName: data.firstName,
        contact: data.contact,
        email: data.email,
        entreprise: data.entreprise,
        function: data.function,
      };

      const userDocRef = doc(db, "users", authres.user.uid);
      const userres = await setDoc(userDocRef, USERDATA);

      showMessage({
        type: "success",
        message: "Successfuly Account created",
      });

      return {
        user: USERDATA,
      };
    } catch (error: any) {
      showMessage({
        type: "danger",
        message: "some thing went wrong Please try again!",
      });
      const message = error?.data ?? "Failed to Login!";

      return rejectWithValue(message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data: UpdateUserData, { rejectWithValue }) => {
    try {
      //axios request
      
     
 
      const userDocRef = doc(db, "users", data.uid||'');
      const userres = await updateDoc(userDocRef, {...data});

      showMessage({
        type: "success",
        message: "Successfuly Updated user details",
      });

      return {
        user: data,
      };
    } catch (error: any) {
      console.log(error)
      showMessage({
        type: "danger",
        message: "some thing went wrong Please try again!",
      });
      const message = error?.data ?? "Failed to Update User!";

      return rejectWithValue(message);
    }
  }
);
export const updateUserEmail = createAsyncThunk(
  "updateUserEmail",
  async (data: UpdateEmailData, { rejectWithValue }) => {
    try {
      //axios request
      const signout=await signOut(auth)
      const authRes = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const update=auth.currentUser &&  await updateEmail(auth.currentUser,data.newemail)
     

      const userDocRef = doc(db, "users", auth.currentUser?auth.currentUser.uid:'');
      const userres = await updateDoc(userDocRef, {email:data.newemail});

      return {
        user: {email:data.newemail},
      };
    } catch (error: any) {
      console.log(error)
      const message = error?.data ?? "Failed to Update User Email!";

      return rejectWithValue(message);
    }
  }
);
