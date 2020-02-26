import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  error: ""
};

const slice = createSlice({
  name: "email",
  initialState,
  reducers: {
    validateFieldSuccess: (state, action) => {
      return {
        value: action.payload,
        error: ""
      };
    },
    validateFieldError: (state, action) => {
      state.value = action.payload.value;
      state.error = action.payload.error;
    }
  }
});

export const {
  actions: { validateFieldSuccess, validateFieldError }
} = slice;
console.log(slice);
export const store = configureStore({
  reducer: {
    email: slice.reducer
  }
});

export default store;
