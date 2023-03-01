import { MenuModel } from "./MenuModel";

export class MenuController {
  private menuModel: MenuModel;

  public constructor(menuModel: MenuModel) {
    this.menuModel = menuModel;
  }

  public GameStartButtonIsPressed(): void {
    this.menuModel.startGameScene();
  }
}
