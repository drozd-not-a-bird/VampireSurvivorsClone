import { Ticker } from "pixi.js";
import { Keys } from "../Components/KeyboardSystem/Keys";
import { PlayerModel } from "../Models/PlayerModel";

export class PlayerController {
  private playerModel: PlayerModel;
  private keys: Keys;

  public constructor(playerModel: PlayerModel) {
    this.playerModel = playerModel;
    this.keys = new Keys();
    this.addEventsForMovement();
    this.addTicker();
  }

  private addEventsForMovement() {
    const keydownFunc = this.keydown.bind(this);
    const keyupFunc = this.keyUp.bind(this);
    document.addEventListener("keydown", keydownFunc);
    document.addEventListener("keyup", keyupFunc);
  }

  private keydown(event: KeyboardEvent) {
    if (event.code == this.keys.upValue) {
      this.keys.upIsPressed = true;
    } else if (event.code == this.keys.downValue) {
      this.keys.downIsPressed = true;
    } else if (event.code == this.keys.leftValue) {
      this.keys.leftIsPressed = true;
    } else if (event.code == this.keys.rightValue) {
      this.keys.rightIsPressed = true;
    }
  }

  private keyUp(event: KeyboardEvent) {
    if (event.code == this.keys.upValue) {
      this.keys.upIsPressed = false;
    } else if (event.code == this.keys.downValue) {
      this.keys.downIsPressed = false;
    } else if (event.code == this.keys.leftValue) {
      this.keys.leftIsPressed = false;
    } else if (event.code == this.keys.rightValue) {
      this.keys.rightIsPressed = false;
    }
  }

  private addTicker() {
    const ticker = Ticker.shared;
    const playerMoveFunc = this.playerMove.bind(this);
    ticker.add(playerMoveFunc);
  }

  private playerMove() {
    this.playerModel.move(this.keys);
  }
}
