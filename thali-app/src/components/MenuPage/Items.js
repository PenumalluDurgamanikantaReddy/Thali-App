import Item from "./Item";
import Pickle from "../../imgs/avakai.png"
import chapati from "../../imgs/chapathi.png"
import sweet from "../../imgs/sweet.png"
import curd from "../../imgs/curd.png"
import daal from "../../imgs/daal.png"
import panner from "../../imgs/panner.png"


const ItemsData=[{id:"1",name:"Chapati",price:18,img:chapati},
                  {id:"2",name:"Sweet",price:25,img:sweet},
                 {id:"3",name:"Pickle",price:20,img:Pickle},
                 {id:"4",name:"Daal",price:35,img:daal},
                 {id:"5",name:"Curd",price:20,img:curd},
                 {id:"6",name:"Panner",price:150,img:panner}]

     const Itemslist=  ItemsData.map((eachitem)=>{ return (
                    <Item  key={eachitem.id}   id={eachitem.id} name={eachitem.name} price={eachitem.price} img={eachitem.img} />
                 )     })
                 
const Items=()=>{






return(
<main  className="itemsUi">

{Itemslist}
</main>

)



}
export default Items;