
import './App.css';

import {InventoryHome} from './InventoryHome';
import {Item} from './Item';
import {Stock} from './Stock';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="background">
    <div className="logo">
        <img src="./images/logo.png" alt=""/>
    </div>
    <div className="App container">
     <h3 className="page-head">
       Textile Inventory Management
     </h3>
     <nav className="navbar navbar-expand-sm bg-light navbar-dark">
       <ul className="navbar-nav">
         <li className="nav-item- m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/InventoryHome">
           InventoryHome
           </NavLink>
         </li>
         <li className="nav-item- m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/item">
             Item
           </NavLink>
         </li>
         <li className="nav-item- m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/stock">
             Stock
           </NavLink>
         </li>
      </ul>
     </nav>
     <Switch>
       <Route path='/inventoryHome'  component={InventoryHome}/>
       <Route path='/item' component={Item}/>
       <Route path='/stock' component={Stock}/>
     </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
