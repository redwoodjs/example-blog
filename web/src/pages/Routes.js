import { BrowserRouter, Switch, Route } from "@hammerframework/hammer-web";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
