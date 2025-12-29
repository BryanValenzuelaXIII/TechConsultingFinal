import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './reduxStore'

// Define a type for the slice state
interface GuestState {
  value: boolean
}

// Define the initial state using that type
const initialState: GuestState = {
  value: false,
}

export const guestSlice = createSlice({
  name: 'guest',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value =  true;
    },
    setFalse: (state) => {
      state.value = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
})

export const { setTrue, setFalse } = guestSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectGuest = (state: RootState) => state.guest.value

export default guestSlice.reducer