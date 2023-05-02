
import { createSlice } from '@reduxjs/toolkit'
import { changeButtt } from './AnthorSlice'
export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:125,
  },
  reducers: {
    increment: (state,action) => {
        state.value += action.payload
    },
    decrement: (state,action) => {
      state.value -= action.payload
    },
    // reset: (state,action) => {
    //   state.value =0;
    // },

  },
  extraReducers:(builder)=>{
    builder.addCase(changeButtt,(state,action)=>{
      state.value =0;
    })

  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement,reset } = counterSlice.actions

export default counterSlice.reducer
















// export let reducer = (state = initState, action) => {
//   switch (action.type) {
//     case "increas": {
//       return {...state,counttt: state.counttt + action.payload };
//     }

//     case "decrease":
//       return {...state,counttt: state.counttt - action.payload };

//     case "resetStae":
//       // console.log(state);
//       return {...state, counttt: 0 };
//     case "hidee":
//       // console.log(state);
//       return {...state, toggle: !state.toggle };

//     default:
//       return state;

//   }
// };



// // subscribe(Listenree);
