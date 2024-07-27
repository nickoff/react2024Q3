import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface SearchTerm {
  value: string;
}

const storedSearchTerm = localStorage.getItem('searchTerm') || '';

const initialState: SearchTerm = {
  value: storedSearchTerm
};

export const searchTermSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setNewSearchValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: action.payload
      };
    }
  }
});

export const { setNewSearchValue } = searchTermSlice.actions;
export const selectSearchTermValue = (state: RootState) => state.search.value;

export default searchTermSlice.reducer;
