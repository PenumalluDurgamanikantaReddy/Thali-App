import "./Cartitem.css"

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cartslice";



const Cartitem=(props)=>{

const dispatch=useDispatch()
const name=props.name;
const id=props.id;
const price=props.price;
const img=props.img

const IncreseIncart=()=>{
    dispatch(cartActions.AddtoCart({name,id,price,img}))

console.log("Hi")
}
const DecreseIncart=()=>{
    dispatch(cartActions.RemovefromCart({name,id,price,img}))

console.log("byee")
}

return(
    <main>
        <main className="cartitemdata">
            <img src={props.img} className="cartitemimg"></img>
            <strong className="cartitemname">{props.name}</strong>
            <main className="AddAndRemove">
          
           
            </main>    
           <main className="pricedetails"> <h6 >Qty:{props.quantity}</h6>  <h6>Price:{props.price}</h6> <h6>Total:{props.totalamount}</h6></main>
           <button className="Aand"  onClick={DecreseIncart}>-</button>
           
            <button className="Rand" onClick={IncreseIncart}   >+</button>
        </main>
        <main className="cartitembg"></main>
    </main>
)



}
export default Cartitem;