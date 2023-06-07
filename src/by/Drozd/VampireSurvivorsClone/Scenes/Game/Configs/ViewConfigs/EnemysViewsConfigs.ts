import { enemys } from "../../../../Configs/Enemys/enemys.json";
import { EnemyViewConfig } from "./EnemyViewConfig";
import { ResourceManager } from "../../../../ResourceManagment/ResourceManager";

export class EnemysViewsConfigs {
  private enemysViewsConfigs: { [name: string]: EnemyViewConfig };;

  public constructor() {
    this.enemysViewsConfigs = {};
    this.initEnemysViewsConfigs();
  }

  private initEnemysViewsConfigs() {
    const resourceManager = ResourceManager.getInstance();
    this.enemysViewsConfigs["fiend"] = new EnemyViewConfig(
      "fiend",
      enemys.fiend.animationSpeed,
      enemys.fiend.width,
      enemys.fiend.height,
      resourceManager.getSpritesheet("fiend")
    );
    this.enemysViewsConfigs["leshy"] = new EnemyViewConfig(
      "leshy",
      enemys.leshy.animationSpeed,
      enemys.leshy.width,
      enemys.leshy.height,
      resourceManager.getSpritesheet("leshy")
    );
  }

  public getEnemyViewConfig(enemyName: string): EnemyViewConfig {
    const config = this.enemysViewsConfigs[enemyName];
    if (config) {
      return config;
    }
    throw new Error(`View config for ${enemyName} does not exist.`);
  }
}
