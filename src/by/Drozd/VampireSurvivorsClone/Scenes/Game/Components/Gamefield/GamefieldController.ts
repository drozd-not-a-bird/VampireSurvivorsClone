import { GamefieldModel } from "./GamefieldModel";

export class GamefieldController {
  private gamefieldModel: GamefieldModel;

  public constructor(gamefieldModel: GamefieldModel) {
    this.gamefieldModel = gamefieldModel;
  }
}
