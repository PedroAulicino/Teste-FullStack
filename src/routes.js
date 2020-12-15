import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Produto from "./Pages/Produtos";
import Cadastrar from "./Pages/Cadastrar";
import Editar from "./Pages/Edit";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/produto/:_id' component={Produto} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/users/edit/:_id' component={Editar} />
      </Switch>
    </Router>
  );
};
export default Routes;
