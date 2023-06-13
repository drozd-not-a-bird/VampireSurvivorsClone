import { Texture } from "pixi.js";
import { ResourceManager } from "../../../../ResourceManagment/ResourceManager";
import { background } from "../../../../Configs/Background/Background.json"

export class BackgroundConfig {
  public readonly stepsInWidth: number;
  public readonly stepsInHeight: number;
  public readonly textureScale: number;
  public readonly textureWidth: number;
  public readonly textureHeight: number;
  public readonly backgroundTileTexture: Texture;

  public constructor() {
    this.stepsInWidth = background.stepsInWidth;
    this.stepsInHeight = background.stepsInHeight;
    this.textureScale = background.textureScale;
    this.textureWidth = background.textureWidth;
    this.textureHeight = background.textureHeight;
    const resourceManager = ResourceManager.getInstance();
    this.backgroundTileTexture = resourceManager.getTexture("gamefieldBackgroundTile");
  }
}
