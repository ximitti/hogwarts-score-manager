// react router dom
import { Switch, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Board from "../pages/Board";

// components
import MenuBar from "../components/Menu";
//------------------------------------------
const Routes = () => (
  <>
    <MenuBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/board">
        <Board />
      </Route>
    </Switch>
  </>
);

export default Routes;
