// react router dom
import { Switch, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import Board from "../pages/Board";
//------------------------------------------
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/board">
      <Board />
    </Route>
  </Switch>
);

export default Routes;
