import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'

import { Grid } from "./components/Grid";
import { EventTicker } from "./components/EventTicker";

ReactDOM.render(
    <div>
        <Grid/>
        <EventTicker/>
    </div>,
    document.getElementById("example")
);

