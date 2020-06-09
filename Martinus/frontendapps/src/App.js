import React,{Component} from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IdentitasList from "../src/component/IdentitasList.component";
import AddIdentitas from "../src/component/AddIdentitas.component";
import Identitas from "./component/Identitas.component";
class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-bg bg-dark">
            <a href="/home" className="navbar-brand">
              Moonlay Test
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/","/home"]} component={IdentitasList}/>
              <Route exact path="/add" component={AddIdentitas}></Route>
              <Route path="/home/:id" component={Identitas}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;