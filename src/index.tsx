import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'

import { Grid } from "./components/Grid";

ReactDOM.render(
    <div>
        <Grid/>
    </div>,
    document.getElementById("example")
);

