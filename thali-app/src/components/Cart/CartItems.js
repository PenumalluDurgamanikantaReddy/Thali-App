
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";
import "./cartitems.css"



const Cartitems=()=>{
const cartitemsdata=useSelector((state)=>{ return state.cartdata.items})


 const data= cartitemsdata.map((eachone)=>{

 return  <Cartitem key={eachone.id} id={eachone.id} name={eachone.name} img={eachone.img}  price={eachone.price} quantity={eachone.quantity} totalamount={eachone.totalamount}   />
    
})



    
        

return(


<main className="carteditems">
    { data}
</main>




)


}
export default Cartitems;