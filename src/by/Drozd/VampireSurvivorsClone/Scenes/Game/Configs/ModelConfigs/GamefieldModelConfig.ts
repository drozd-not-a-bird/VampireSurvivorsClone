import { EnemyModelConfig } from "./EnemyModelConfig";
import { EnemysModelsConfigs } from "./EnemysModelsConfigs";
import { PlayerModelConfig } from "./PlayerModelConfig";
import { EnemySpawnConfig } from "./EnemySpawnConfig";

export class GamefieldModelConfig {
  public readonly playerModelConfig: PlayerModelConfig;
  public readonly enemysModelsConfigs: EnemysModelsConfigs;
  public readonly enemySpawnConfig: EnemySpawnConfig;

  public constructor() {
    this.playerModelConfig = new PlayerModelConfig();
    this.enemysModelsConfigs = new EnemysModelsConfigs();
    this.enemySpawnConfig = new EnemySpawnConfig();
  }
}
