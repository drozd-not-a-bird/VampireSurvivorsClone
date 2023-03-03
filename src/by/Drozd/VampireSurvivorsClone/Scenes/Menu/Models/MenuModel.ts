import { Game } from "../../../Game";
import { IMenuModel } from "./IMenuModel";

export class MenuModel implements IMenuModel {
  public constructor() {}

  public startGameScene(): void {
    Game.showGameScene();
  }
}
