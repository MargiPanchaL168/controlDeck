import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light'
  }

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            console.log({"Indise changeTheme reducer":"", state, action});
            state.theme = action.payload
        }
    }
})

export const { changeTheme } = homeSlice.actions;
export default homeSlice.reducer;
