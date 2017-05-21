import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'

import { Grid } from "./components/Grid";
import { EventTicker } from "./components/EventTicker";
import { DrinkingBuddy } from "./components/DrinkingBuddy";
import { WinningBuddies } from "./components/WinningBuddies";
import { Reset } from "./components/Reset";

ReactDOM.render(
    <div>
    	<img className="background-image" src="https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/election-background.jpg"/>
        <Grid/>
        <EventTicker/>
        <DrinkingBuddy/>
        <WinningBuddies/>
        <Reset/>
    </div>,
    document.getElementById("example")
);

