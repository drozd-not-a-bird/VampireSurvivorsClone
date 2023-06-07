import { player } from "../../../../Configs/Player/Player.json";
import { Spritesheet } from "pixi.js";
import { ResourceManager } from "../../../../ResourceManagment/ResourceManager";

export class PlayerViewConfig {
  public readonly animationSpeed: number;
  public readonly width: number;
  public readonly height: number;
  public readonly playerSpriteSheet: Spritesheet;

  public constructor() {
    this.animationSpeed = player.animationSpeed;
    this.width = player.width;
    this.height = player.height;
    const resourceManager = ResourceManager.getInstance();
    this.playerSpriteSheet = resourceManager.getSpritesheet("player");
  }
}
