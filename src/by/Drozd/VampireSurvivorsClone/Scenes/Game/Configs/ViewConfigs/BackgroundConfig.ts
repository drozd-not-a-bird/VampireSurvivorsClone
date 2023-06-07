import { Texture } from "pixi.js";
import { ResourceManager } from "../../../../ResourceManagment/ResourceManager";

export class BackgroundConfig {
  public readonly stepsInWidth: number;
  public readonly stepsInHeight: number;
  public readonly textureScale: number;
  public readonly textureWidth: number;
  public readonly textureHeight: number;
  public readonly backgroundTileTexture: Texture;

  public constructor() {
    this.stepsInWidth = 10;
    this.stepsInHeight = 10;
    this.textureScale = 2;
    this.textureWidth = 256;
    this.textureHeight = 256;
    const resourceManager = ResourceManager.getInstance();
    this.backgroundTileTexture = resourceManager.getTexture("gamefieldBackgroundTile");
  }
}
