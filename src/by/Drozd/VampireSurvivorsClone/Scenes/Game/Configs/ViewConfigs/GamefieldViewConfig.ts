import { BackgroundConfig } from "./BackgroundConfig";
import { EnemysViewsConfigs } from "./EnemysViewsConfigs";
import { PlayerViewConfig } from "./PlayerViewConfig";

export class GamefieldViewConfig {
  public readonly backgroundConfig: BackgroundConfig;
  public readonly playerViewConfig: PlayerViewConfig;
  public readonly enemysViewsConfigs: EnemysViewsConfigs;

  public constructor() {
    this.backgroundConfig = new BackgroundConfig();
    this.playerViewConfig = new PlayerViewConfig();
    this.enemysViewsConfigs = new EnemysViewsConfigs();
  }
}