import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showName: false,
    name: 'Pavel'
}


const checkBoxToggle = createSlice({
  name: 'toggle',
  initialState,
  reducers:{
    changeStateProfile:(state) => {
      console.log(state);
      return {
        ...state,
        showName: !state.showName
      }
    }
  }
})

export const {changeStateProfile} = checkBoxToggle.actions
export const profileReducer = checkBoxToggle.reducer