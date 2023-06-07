import { Graphics, Ticker } from "pixi.js";
import { App } from "../../../../../../../Application";
import { ResourceManager } from "../../../../ResourceManagment/ResourceManager";
import { Button } from "../../../../UI/Buttons/Button";
import { Gamefield } from "../../Gamefield";
import { TimerModel } from "../../Models/TimerModel";

export class GameStopButton extends Button {
  private isClicked: boolean;
  private gamefield: Gamefield;
  private darkOverlay: Graphics;
  private timerModel: TimerModel;

  public constructor() {
    const resourceManager = ResourceManager.getInstance();
    super(resourceManager.getTexture("stopButton"));
    this.isClicked = false;
    this.gamefield = Gamefield.getInstance();
    this.timerModel = TimerModel.getInstance();
    this.createDarkOverlay();
    this.createTicker();
    this.on("click", this.clicked.bind(this));
  }

  private clicked(): void {
    if (!this.isClicked) {
      this.isClicked = true;
      this.stopGame();
    } else if (this.isClicked) {
      this.isClicked = false;
      this.continueGame();
    }
  }

  private continueGame(): void {
    const ticker = Ticker.shared;
    ticker.start();
    this.timerModel.startTimer();
    this.darkOverlay.visible = false;
  }

  private stopGame(): void {
    const ticker = Ticker.shared;
    ticker.stop();
    this.timerModel.stopTimer();
    this.darkOverlay.visible = true;
  }

  private createTicker(): void {
    const ticker = Ticker.shared;
    ticker.add(this.holdButton.bind(this));
  }

  private holdButton(): void {
    this.x = this.gamefield.pivot.x + App.width / 2 - this.width;
    this.y = this.gamefield.pivot.y - App.height / 2;
    this.darkOverlay.x = this.gamefield.pivot.x - App.width / 2;
    this.darkOverlay.y = this.gamefield.pivot.y - App.height / 2;
  }

  private createDarkOverlay(): void {
    const darkOverlay = new PIXI.Graphics();
    darkOverlay.beginFill(0x000000, 0.5); // Черный цвет с прозрачностью 0.5
    darkOverlay.drawRect(0, 0, App.width, App.height); // Размеры спрайта равны размерам экрана
    darkOverlay.endFill();
    darkOverlay.visible = false;
    this.darkOverlay = darkOverlay;
    this.gamefield.addChild(darkOverlay);
  }
}
