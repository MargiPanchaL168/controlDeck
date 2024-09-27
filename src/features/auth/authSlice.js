import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    doLogin: (state) => {
      state.isLogin = true
    },
    doLogOut: (state) => {
      state.isLogin = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { doLogin, doLogOut } = authSlice.actions

export default authSlice.reducer