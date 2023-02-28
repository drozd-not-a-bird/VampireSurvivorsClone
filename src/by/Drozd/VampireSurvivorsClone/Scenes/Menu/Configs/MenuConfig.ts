import { Texture } from "pixi.js";

export class MenuConfig {
  public readonly textureForBackground: Texture;
  
  constructor() {
    this.textureForBackground = Texture.from("./assets/Backgrounds/menuBackground.jpg");
  }
}
