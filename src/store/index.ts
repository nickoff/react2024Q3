import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search';
import { starWarsApi } from './reducers/apiService';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [starWarsApi.reducerPath]: starWarsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starWarsApi.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
