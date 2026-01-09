import { configureStore } from '@reduxjs/toolkit'
import guestReducer from './guestSlice'
import barsReducer from './barsSlice';
import { barsSaga } from './sagas/barsSaga';
import createSagaMiddleware from 'redux-saga';
import userReducer from "./userSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    guest: guestReducer,
    user: userReducer,
    bars: barsReducer,
  }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, 
      serializableCheck: false, 
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(barsSaga);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch