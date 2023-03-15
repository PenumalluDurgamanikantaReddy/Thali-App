import { createSlice } from "@reduxjs/toolkit";

const cartitems={items:[],totalitems:0}

const CartReducer=createSlice({
    name:"cartitems",
    initialState:cartitems,
    reducers:{
        AddtoCart(state,action){
          const newItem=action.payload
          const existingItem=state.items.find((item)=>{ return item.id ===newItem.id})
          if(!existingItem){
           
            state.items.push({
                id:newItem.id,
                name:newItem.name,
                price:newItem.price,
                quantity:1,
                totalamount:newItem.price,
                img:newItem.img
            })
          }
          else{
            existingItem.quantity++
            existingItem.totalamount += newItem.price
          }
        },
        RemovefromCart(state,action){
          const newItem=action.payload
          const existingItem=state.items.find((item)=>{ return item.id ===newItem.id})
          if(existingItem.quantity>0){
            existingItem.quantity--
            existingItem.totalamount -= newItem.price
          }
          if(existingItem.quantity===0){
          const removeditem=state.items.findIndex((item)=>{ return  item.quantity===0})

             state.items.splice(removeditem,1)
          }
        }
    }
})
export const cartActions=CartReducer.actions
export default CartReducer;
