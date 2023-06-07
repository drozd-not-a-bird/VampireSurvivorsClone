import { MiniSignal } from "mini-signals";
import { Game } from "../../../Game";

export class MenuModel {
  public PlayButtonPressed: MiniSignal;

  public constructor() {
    this.PlayButtonPressed = new MiniSignal();
  }

  public ShowWeaponSelection(): void {
    this.PlayButtonPressed.dispatch();
  }

  public StartGameScene(): void {
    Game.showGameScene();
  }
}
