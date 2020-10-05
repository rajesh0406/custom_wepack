import React from "react";
import ReactDOM from "react-dom";
import Component from './component/component';
import Component2 from './component/component2'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const App = () => (
<div>
<Router>
    <Switch>
        <Route exact path="/">
            <Link to="/component">click</Link>
        <h1 >Hello world!!</h1>
        </Route>
        <Route path="/component">
        <Component/>
        </Route>
        <Route path="/component2">
            <Component2/>
        </Route>

    </Switch>
</Router>
</div>
)
ReactDOM.render(<App/>, document.getElementById("root"));