import { EnemysModelsConfigs } from "../../Configs/ModelConfigs/EnemysModelsConfigs";
import { EnemysViewsConfigs } from "../../Configs/ViewConfigs/EnemysViewsConfigs";
import { EnemyController } from "../../Controllers/EnemyController";
import { EnemyModel } from "../../Models/EnemyModel";
import { EnemyView } from "../../Views/EnemyView";

export class EnemyFactory {
  private enemysModelsConfigs: EnemysModelsConfigs;
  private enemysViewsConfigs: EnemysViewsConfigs;

  public constructor(
    enemysModelsConfigs: EnemysModelsConfigs,
    enemysViewsConfigs: EnemysViewsConfigs
  ) {
    this.enemysModelsConfigs = enemysModelsConfigs;
    this.enemysViewsConfigs = enemysViewsConfigs;
  }

  public createEnemy(enemyName: string): EnemyView {
    const enemyModel = new EnemyModel(
      this.enemysModelsConfigs.getEnemyModelConfig(enemyName)
    );
    const enemyController = new EnemyController(enemyModel);
    const enemyView = new EnemyView(
      enemyModel,
      enemyController,
      this.enemysViewsConfigs.getEnemyViewConfig(enemyName)
    );
    return enemyView;
  }
}
