import { GamefieldModel } from "./GamefieldModel";
import { GamefieldController } from "./GamefieldController";
import { UIComponent } from "../../../../UI/UIComponents";
import { App } from "../../../../../../../Application";

export class GamefieldView extends UIComponent {
  private gamefieldModel: GamefieldModel;
  private gamefieldController: GamefieldController;

  public constructor(
    gamefieldModel: GamefieldModel,
    gamefieldController: GamefieldController
  ) {
    super();
    this.gamefieldModel = gamefieldModel;
    this.gamefieldController = gamefieldController;
    this.setBackground();
    this.setPlayer();
  }

  private setBackground(): void {
    this.addChild(this.gamefieldModel.background);
  }

  private setPlayer(): void {

  }
}
