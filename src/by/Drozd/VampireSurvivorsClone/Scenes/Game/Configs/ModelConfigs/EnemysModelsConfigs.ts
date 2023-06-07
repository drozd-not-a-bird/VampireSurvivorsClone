import { enemys } from "../../../../Configs/Enemys/enemys.json";
import { EnemyModelConfig } from "./EnemyModelConfig";

export class EnemysModelsConfigs {
  private enemysModelsConfigs: { [name: string]: EnemyModelConfig };

  public constructor() {
    this.enemysModelsConfigs = {};
    this.initEnemysModelConfigs();
  }

  private initEnemysModelConfigs(): void {
    this.enemysModelsConfigs["wolf"] = new EnemyModelConfig(
      "wolf",
      enemys.wolf.health,
      enemys.wolf.movementSpeed,
      enemys.wolf.attackSpeed,
      enemys.wolf.attackRange,
      enemys.wolf.damage
    );
    this.enemysModelsConfigs["bear"] = new EnemyModelConfig(
      "bear",
      enemys.bear.health,
      enemys.bear.movementSpeed,
      enemys.bear.attackSpeed,
      enemys.bear.attackRange,
      enemys.bear.damage
    );
    this.enemysModelsConfigs["drowner"] = new EnemyModelConfig(
      "drowner",
      enemys.drowner.health,
      enemys.drowner.movementSpeed,
      enemys.drowner.attackSpeed,
      enemys.drowner.attackRange,
      enemys.drowner.damage
    );
    this.enemysModelsConfigs["ghoul"] = new EnemyModelConfig(
      "ghoul",
      enemys.ghoul.health,
      enemys.ghoul.movementSpeed,
      enemys.ghoul.attackSpeed,
      enemys.ghoul.attackRange,
      enemys.ghoul.damage
    );
    this.enemysModelsConfigs["ghost"] = new EnemyModelConfig(
      "ghost",
      enemys.ghost.health,
      enemys.ghost.movementSpeed,
      enemys.ghost.attackSpeed,
      enemys.ghost.attackRange,
      enemys.ghost.damage
    );
    this.enemysModelsConfigs["fiend"] = new EnemyModelConfig(
      "fiend",
      enemys.fiend.health,
      enemys.fiend.movementSpeed,
      enemys.fiend.attackSpeed,
      enemys.fiend.attackRange,
      enemys.fiend.damage
    );
    this.enemysModelsConfigs["leshy"] = new EnemyModelConfig(
      "leshy",
      enemys.leshy.health,
      enemys.leshy.movementSpeed,
      enemys.leshy.attackSpeed,
      enemys.leshy.attackRange,
      enemys.leshy.damage
    );
  }

  public getEnemyModelConfig(enemyName: string): EnemyModelConfig {
    const config = this.enemysModelsConfigs[enemyName];
    if (config) {
      return config;
    }
    throw new Error(`Model config for ${enemyName} does not exist.`);
  }
}
