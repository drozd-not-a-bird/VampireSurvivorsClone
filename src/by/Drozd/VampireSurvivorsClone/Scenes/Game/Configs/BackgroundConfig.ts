import { Texture } from "pixi.js";

export class BackgroundConfig {
  public readonly textureForBackground: Texture;
  public readonly stepsInWidth: number;
  public readonly stepsInHeight: number;
  public readonly textureScale: number;
  public readonly textureWidth: number;
  public readonly textureHeight: number;

  public constructor() {
    this.textureForBackground = Texture.from("./assets/Backgrounds/tile1.png");
    this.stepsInWidth = 15;
    this.stepsInHeight = 20;
    this.textureScale = 2;
    this.textureWidth = 64;
    this.textureHeight = 64;
  }
}
