import Menubackground from "../../imgs/menu.jpg"
import Item from "./Item"
import Items from "./Items"
import "./Menupage.css"
import { useSelector } from "react-redux"
const Menupage=()=>{

    const cartItems=useSelector((state)=>{ return state.cartdata.items })






    return(
        <main>
          
          <img src={Menubackground} className="menubg"></img> 
             <main className="items">
            <Items/>
           </main> 
            <main className="itemonPlate">
          {cartItems.map((eachitem)=>{return <img className="plateitems"  src={eachitem.img} /> })}
          
           </main>
        </main>
    )
}
export default Menupage