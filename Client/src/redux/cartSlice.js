import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name :"cart",
    initialState:{
        items:[]
    },
    reducers:{
        add : (state,action)=>{
            if(!state.items.includes(action.payload)){
                state.items.push(action.payload)
            }
        },

        remove : (state,action)=>{
            state.items = state.items.filter((id)=> id!=action.payload)
        }
    }
})

export const {add,remove} = CartSlice.actions

export default CartSlice.reducer