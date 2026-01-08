import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface BarsState {
  allBars: any[];
  userBars: any[];
  loadingAll: boolean;
  loadingUser: boolean;
  error: string | null;
}

const initialState: BarsState = {
  allBars: [],
  userBars: [],
  loadingAll: false,
  loadingUser: false,
  error: null,
};

const barsSlice = createSlice({
  name: 'bars',
  initialState,
  reducers: {
    // ALL BARS
    fetchAllBarsRequest(state) {
      state.loadingAll = true;
    },
    fetchAllBarsSuccess(state, { payload }: PayloadAction<any[]>) {
      state.loadingAll = false;
      state.allBars = payload;
    },

    // USER BARS (INLINE DESTRUCTURING)
    fetchUserBarsRequest(
      state,
      { payload }: PayloadAction<{ owner: string }>
    ) {
      state.loadingUser = true;
    },
    fetchUserBarsSuccess(
      state,
      { payload }: PayloadAction<any[]>
    ) {
      state.loadingUser = false;
      state.userBars = payload;
    },

    fetchBarsFailure(
      state,
      { payload }: PayloadAction<string>
    ) {
      state.loadingAll = false;
      state.loadingUser = false;
      state.error = payload;
    },
  },
});

export const {
  fetchAllBarsRequest,
  fetchAllBarsSuccess,
  fetchUserBarsRequest,
  fetchUserBarsSuccess,
  fetchBarsFailure,
} = barsSlice.actions;

export default barsSlice.reducer;
