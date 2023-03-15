
import cartbg  from "./cart.jpg"
import "./cart.css"
import { useSelector } from "react-redux";
import Cartitems from "./CartItems";

const Cart=()=>{
const names=useSelector((state)=>{ return state.cartdata.items})
const cartItems=useSelector((state)=>{ return state.cartdata.items })

if(cartItems.length<2){
alert("Add At Least Two Items to Cart")
}

let sum=0;
names.map((each)=>{
    return  sum +=parseInt(each.totalamount) 
        })


return(

    <main>
         <main className="addeditems">
         <Cartitems/>
        </main>
        <div className="pay">
        <label>Items</label>    <label>price</label>
        
        </div>
        <div className="paynameandprice">
        <ul className="paynames">
        {names.map((each)=>{
        return<li>{each.name}</li> 
            })}    
        </ul>
        <ul className="payprices">
        {names.map((each)=>{
        return<li>{each.price} x {each.quantity}={each.totalamount}</li> 
            })}    
        </ul>
        <ul className="paytotal">
         <li>Total   </li>
         <li> {sum}</li>
         </ul>
        </div>
        
        <img src={cartbg} className="cartbg"></img>
       
      
    </main>
)




}
export default Cart;


{/* <ul className="paynames">
        {names.map((each)=>{
        return<li>{each.name}</li> 
            })}    
        </ul>
        <ul className="payprices">
        {names.map((each)=>{
        return<li>{each.price} x {each.quantity}={each.totalamount}</li> 
            })}    
        </ul>
        <ul className="paytotal">
         <li>Total   </li>
         <li> {sum}</li>
         </ul> */}