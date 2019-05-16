import React from "react"; //stateless so you don't need {component}
import { Switch, Route } from "react-router";

import LandingPage from "./Landingpage";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Aboutme" component={Aboutme} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Resume" component={Resume} />
  </Switch>
);

export default Main;
