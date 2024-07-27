import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/search';
import selectedPersonReducer from './reducers/selectedPerson';
import { starWarsApi } from './reducers/apiService';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    selectedPerson: selectedPersonReducer,
    [starWarsApi.reducerPath]: starWarsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starWarsApi.middleware),
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
