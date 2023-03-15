import homeimg from "../imgs/homeimg.jpg"
import "./home.css"
import { NavLink } from "react-router-dom"


const Home=()=>{





    return(
        <main>
          
          <NavLink to="Menu"><h1 className="orderheadline"><a >Order Your Thali Now</a></h1></NavLink> 
                <img src={homeimg} className="homeimg"></img>
        </main>
    )




}

export default Home;