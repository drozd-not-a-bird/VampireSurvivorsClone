import { Texture } from "pixi.js";
import { MenuConfig } from "../../Configs/MenuConfig";

export class MenuModel {
  private backgroundImage: Texture;

  public constructor(menuConfig: MenuConfig) {
    this.backgroundImage = menuConfig.textureForBackground;
  }

  public getBackgroundImage(): Texture {
    return this.backgroundImage;
  }
}
