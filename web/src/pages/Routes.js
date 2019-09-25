import { BrowserRouter, Switch, Route, PrivateRoute } from "@hammerframework/hammer-web";

import Admin from "./Admin";
import Home from "./Home";

console.info("HELLO WORLD");

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
