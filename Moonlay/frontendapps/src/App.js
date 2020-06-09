import React,{Component} from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddItems from "./component/add-items.component";
import Items from "./component/items.component";
import ItemsList from "./component/item-list.component";

class App extends Component{
  render(){
    return(
      <Router>
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/TodoItems" className="navbar-brand">
              bezKoder
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/TodoItems"} className="nav-link">
                  Tutorials
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/TodoItems"]} component={ItemsList} />
              <Route exact path="/add" component={AddItems} />
              <Route path="/TodoItems/:id" component={Items} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
