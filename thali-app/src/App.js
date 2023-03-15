
import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Menupage from './components/MenuPage/MenuPage';
import {BrowserRouter, Redirect} from "react-router-dom"
import { Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/">
        <Redirect to="Home"/>
       </Route>

      <Route path="/Home">
      <Home/>
      </Route>
      <Route path="/Menu">
    <Menupage/>
    </Route>
    <Route path="/Cart">
     <Cart/>
    </Route>
    </div>
  );
}

export default App;
