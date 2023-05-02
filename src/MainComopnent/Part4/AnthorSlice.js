





import { createSlice } from '@reduxjs/toolkit'

export const AntherSlice = createSlice({
  name: 'AntherSlice',
  initialState:{
    value:false,
  },
  reducers: {
    changeButtt: (state,action) => {
        state.value =!state.value;
    }

  },
})

export const { changeButtt } = AntherSlice.actions

export default AntherSlice.reducer


