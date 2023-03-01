import { Texture } from "pixi.js";
import { Game } from "../../../../Game";
import { MenuConfig } from "../../Configs/MenuConfig";

export class MenuModel {
  private backgroundImage: Texture;

  public constructor(menuConfig: MenuConfig) {
    this.backgroundImage = menuConfig.textureForBackground;
  }

  public getBackgroundImage(): Texture {
    return this.backgroundImage;
  }
   
  public startGameScene(): void {
    Game.showGameScene();
  }
}
