import { MenuModel } from "../Models/MenuModel";

export class MenuController {
  private static menuModel: MenuModel;

  public constructor(menuModel: MenuModel) {
    MenuController.menuModel = menuModel;
  }

  public ButtonPlayIsPressed(): void {
    MenuController.menuModel.ShowWeaponSelection();
  }

  public ButtonStartGameIsPressed(): void {
    MenuController.menuModel.StartGameScene();
  }
}
