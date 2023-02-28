import { MenuModel } from "./MenuModel";

export class MenuController {
  private menuModel: MenuModel;

  public constructor(menuModel: MenuModel) {
    this.menuModel = menuModel;
  }
}
