import * as React from "react";
import { gameStateStore } from "../stores";
import { rowComplete, columnComplete, GameStateEventResolver } from "../GameStateEventResolver"
import { BuddyWithPhrase } from "../models/BuddyWithPhrase";

export interface EventProps { }

export class DrinkingBuddy extends React.Component<EventProps,{}> {
    imageUrl: string;
    winUrl: string;
    timerId: NodeJS.Timer;
    images: BuddyWithPhrase[];
    animations: string[];
    bannerClass: string;
    bannerText: string;

    constructor() {
        super();
        gameStateStore.subscribe(this.handleStateChange.bind(this));
        this.imageUrl = "";
        this.winUrl = "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/db.png";
        this.images = [
            new BuddyWithPhrase("Strong and Stable", "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/new/1.png", "conservative"),
            new BuddyWithPhrase("For the many, not the few", "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/new/2.png", "labour"),
            new BuddyWithPhrase("#IAgreeWithTim", "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/new/3.png", "libdems"),
            new BuddyWithPhrase("Freedom", "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/new/4.png", "snp"),
            new BuddyWithPhrase("Green Guarantee", "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/new/5.png", "greens"),
            new BuddyWithPhrase("Tarian Cymru", "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/new/6.png", "plaidcymru"),
            new BuddyWithPhrase("Zero Net Immigration", "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/new/7.png", "ukip"),
        ]
        this.animations = [
            "animateOne",
            "animateTwo",
            "animateThree",
            "animateFour",
        ]
    }

    handleStateChange() {
        let state = gameStateStore.getState();
        if(rowComplete(state.game, state.lastSquareActioned.x) || columnComplete(state.game, state.lastSquareActioned.y)) { 
            let selectedBuddy: BuddyWithPhrase = this.images[Math.floor(Math.random() * this.images.length)];
            this.imageUrl = selectedBuddy.image;
            this.bannerClass = selectedBuddy.bannerClass;
            this.bannerText = selectedBuddy.phrase;
            clearInterval(this.timerId);
            this.timerId = setInterval(() => this.tick(), 4000);
            this.setState({
                newForm : true
            });
        }
    }

  tick() {
    this.imageUrl = "";
    clearInterval(this.timerId);
    this.setState({
        newForm: true
    });
  }

  render() {
        return (
            <div>
                <div className={(this.imageUrl ? "banner " : "") + this.bannerClass}>{this.bannerText}</div>
                <div id="drinkingBuddy" className={(this.imageUrl == "" ? "" : this.animations[Math.floor(Math.random() * this.animations.length)])}><img src={this.imageUrl}/></div>
            </div>
        );
  }
}
