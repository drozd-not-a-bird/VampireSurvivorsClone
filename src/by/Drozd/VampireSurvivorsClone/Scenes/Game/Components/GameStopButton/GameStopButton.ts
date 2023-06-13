import { Graphics, Ticker } from "pixi.js";
import { App } from "../../../../../../../Application";
import { ResourceManager } from "../../../../ResourceManagment/ResourceManager";
import { Button } from "../../../../UI/Buttons/Button";
import { LabelButton } from "../../../../UI/Buttons/LabelButton";
import { Gamefield } from "../../Gamefield";
import { TimerModel } from "../../Models/TimerModel";

export class GameStopButton extends Button {
  private isClicked: boolean;
  private gamefield: Gamefield;
  private timerModel: TimerModel;
  private darkOverlay: Graphics;
  private buttonContinue: LabelButton;

  public constructor(buttonContinue: LabelButton) {
    const resourceManager = ResourceManager.getInstance();
    super(resourceManager.getTexture("stopButton"));
    this.isClicked = false;
    this.gamefield = Gamefield.getInstance();
    this.timerModel = TimerModel.getInstance();
    this.createDarkOverlay();
    this.buttonContinue = buttonContinue;
    this.buttonContinue.on("click", this.continueGame.bind(this));
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
    this.buttonContinue.visible = false;
  }

  private stopGame(): void {
    const ticker = Ticker.shared;
    ticker.stop();
    this.timerModel.stopTimer();
    this.darkOverlay.visible = true;
    this.generateContinueButton();
  }

  private generateContinueButton(): void {
    this.buttonContinue.visible = true;
    this.buttonContinue.x = this.gamefield.pivot.x - this.buttonContinue.getWidth() / 2;
    this.buttonContinue.y = this.gamefield.pivot.y - 50 - this.buttonContinue.getHeight() / 2;
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
