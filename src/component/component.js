import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function component() {
    return (
        <div>
            <p>component 1</p>
            <Link to="/component2">Click me</Link>
        </div>
    )
}

export default component
