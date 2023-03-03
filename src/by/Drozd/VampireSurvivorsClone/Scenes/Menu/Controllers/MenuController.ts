import { IMenuModel } from "../Models/IMenuModel";
import { IMenuController } from "./IMenuController";

export class MenuController implements IMenuController {
  private menuModel: IMenuModel;

  public constructor(menuModel: IMenuModel) {
    this.menuModel = menuModel;
  }

  public GameStartButtonIsPressed(): void {
    this.menuModel.startGameScene();
  }
}
