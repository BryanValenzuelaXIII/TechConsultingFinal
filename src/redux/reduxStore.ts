import { configureStore } from '@reduxjs/toolkit'
import guestReducer from './guestSlice'

export const store = configureStore({
  reducer: {
    guest: guestReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch