import { IMenuModel } from "../Models/IMenuModel";
import { IMenuController } from "./IMenuController";

export class MenuController implements IMenuController {
  private static menuModel: IMenuModel;

  public constructor(menuModel: IMenuModel) {
    MenuController.menuModel = menuModel;
  }

  public GameStartButtonIsPressed(): void {
    MenuController.menuModel.startGameScene();
  }
}
