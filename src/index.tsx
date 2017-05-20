import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'

import { Grid } from "./components/Grid";
import { EventTicker } from "./components/EventTicker";
import { DrinkingBuddy } from "./components/DrinkingBuddy";

ReactDOM.render(
    <div>
    	<img className="background-image" src="https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/election-background.jpg"/>
        <Grid/>
        <EventTicker/>
        <DrinkingBuddy/>
    </div>,
    document.getElementById("example")
);

