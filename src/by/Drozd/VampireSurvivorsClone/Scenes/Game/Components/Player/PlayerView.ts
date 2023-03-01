import { AnimatedSprite } from "pixi.js";
import { UIComponent } from "../../../../UI/UIComponents";
import { PlayerController } from "./PlayerController";
import { PlayerModel } from "./PlayerModel";

export class PlayerView extends UIComponent {
  private playerModel: PlayerModel;
  private playerController: PlayerController;
  private playerStaying: AnimatedSprite;

  constructor(playerModel: PlayerModel, playerController: PlayerController) {
    super();
    this.playerModel = playerModel;
    this.playerController = playerController;
    this.addAnimations();
  }

  private addAnimations(): void {

  }
}