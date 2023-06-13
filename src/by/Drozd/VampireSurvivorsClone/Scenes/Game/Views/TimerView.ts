import { Ticker } from "pixi.js";
import { App } from "../../../../../../Application";
import { Label } from "../../../UI/Labels/Label";
import { TimerLabel } from "../../../UI/Labels/TimerLabel";
import { View } from "../../../UI/View";
import { Gamefield } from "../Gamefield";
import { TimerModel } from "../Models/TimerModel";

export class TimerView extends View {
  private timerModel: TimerModel;
  private gamefield: Gamefield;
  private label: Label;

  public constructor(timerModel: TimerModel) {
    super();
    this.timerModel = timerModel;
    this.gamefield = Gamefield.getInstance();
    this.setLabel();
    this.connectToModel();
    this.createTicker();
  }

  private setLabel(): void {
    const label = new TimerLabel("00:00");
    this.label = label;
    this.addChild(label);
  }

  private connectToModel(): void {
    const changeLabelFucn = this.changeLabel.bind(this);
    this.timerModel.timeIsChange.add(changeLabelFucn);
  }

  private changeLabel(time: string): void {
    this.label.text = time;
  }

  private createTicker(): void {
    const ticker = Ticker.shared;
    ticker.add(this.holdLabel.bind(this));
  }

  private holdLabel(): void {
    this.x = this.gamefield.pivot.x - this.width / 2;
    this.y = this.gamefield.pivot.y - App.height / 2 + 10;
  }
}
