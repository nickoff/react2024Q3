import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface SelectedPerson {
  selectedPerson: string[];
}

const initialState: SelectedPerson = {
  selectedPerson: []
};

export const selectedPersonSlice = createSlice({
  name: 'selectedPerson',
  initialState,
  reducers: {
    addSelectPerson: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        selectedPerson: state.selectedPerson.concat(action.payload)
      };
    },
    deleteSelectPerson: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        selectedPerson: state.selectedPerson.filter((id) => id !== action.payload)
      };
    }
  }
});

export const { addSelectPerson, deleteSelectPerson } = selectedPersonSlice.actions;
export const selectSelectedPersonValue = (state: RootState) => state.selectedPerson.selectedPerson;

export default selectedPersonSlice.reducer;
