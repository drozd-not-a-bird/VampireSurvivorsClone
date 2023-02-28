import { Texture } from "pixi.js";
import { BackgroundConfig } from "./BackgroundConfig";
import { PlayerConfig } from "./PlayerConfig";

export class LevelConfig {
  public readonly backgroundConfig: BackgroundConfig;
  public readonly playerConfig: PlayerConfig;
  
  constructor() {
    this.backgroundConfig = new BackgroundConfig();
    this.playerConfig = new PlayerConfig();
  }
}
