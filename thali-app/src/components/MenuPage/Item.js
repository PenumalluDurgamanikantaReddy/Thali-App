
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cartslice";
import "./Item.css"
import { useSelector } from "react-redux";
import { useState } from "react";


const Item=(props)=>{
  const [Count,SetCount]=  useState(0)
    const dispatch=useDispatch()
   

const name=props.name;
const id=props.id;
const price=props.price;
const img=props.img
const cartItems=useSelector((state)=>{ return state.cartdata.items })

// const Qunatity=cartItems.find((item => {if(item.id === id) {return cartItems.quantity} }  ))
// console.log(Qunatity)
const AddingtoCart=()=>{
    dispatch(cartActions.AddtoCart({name,id,price,img}))
    console.log("HI")

    SetCount(cartItems.map((eachitem)=>{ return eachitem.quantity}))  
}

const RemoveonefromCart=()=>{
    dispatch(cartActions.RemovefromCart({name,id,price,img}))
    console.log("Bye")
    SetCount(cartItems.map((eachitem)=>{ return eachitem.quantity}))  
}

    return(

        <main className="item">
         <main className="itemcon"  >
         
          <img src={img} className="itemimg"></img>
          <main className="contentitem">
           <div className="nameandprice">
           <strong id="itemname">{name}</strong>
           <h6 >Rs/-{price}</h6>
           </div>
           {/* {(cart.find(item => item.id === product.id) || { quantity: 0 }).quantity} */}
           <p className="itenCount">{(cartItems.find(item => item.id === id )|| {quantity:0}).quantity }</p>
            {/* <main>
           11 
            
           </main> */}
           
           <button className="Der" onClick={RemoveonefromCart}>-</button>
           <button className="AddToCat" onClick={AddingtoCart}>+</button>
           <button className="AddToCart" onClick={AddingtoCart}>AddToCart</button>
           
           </main>
          </main>
          
          <main className="itemdetails">
          
          </main>
       
        </main>
    )


}
export default Item;