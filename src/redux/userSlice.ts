import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  music: "",
  distance: "",
  cost: "",
  age: "",
  favorites: [], 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMusic: (state, action) => {
      state.music = action.payload;
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
    setCost: (state, action) => {
      state.cost = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setPreferences: (state, action) => {
      return { ...state, ...action.payload };
    },
    addFavorite: (state, action) => {
      const barId = action.payload;
      if (!state.favorites.includes(barId)) {
        state.favorites.push(barId);
      }
    },
    removeFavorite: (state, action) => {
      const barId = action.payload;
      state.favorites = state.favorites.filter(id => id !== barId);
    },
    clearFavorites: (state) => {
      state.favorites = [];
    }
  },
});

export const {
  setMusic,
  setDistance,
  setCost,
  setAge,
  setPreferences,
  addFavorite,
  removeFavorite,
  clearFavorites
} = userSlice.actions;

export default userSlice.reducer;
