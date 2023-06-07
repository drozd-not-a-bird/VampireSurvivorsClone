import { EnemyModelConfig } from "../../Configs/ModelConfigs/EnemyModelConfig";
import { EnemyViewConfig } from "../../Configs/ViewConfigs/EnemyViewConfig";
import { EnemyController } from "../../Controllers/EnemyController";
import { EnemyModel } from "../../Models/EnemyModel";
import { EnemyView } from "../../Views/EnemyView";

export class Enemy {
  private enemyModel: EnemyModel;
  private enemyController: EnemyController;
  private enemyView: EnemyView;

  public constructor(
    enemyModelConfig: EnemyModelConfig,
    enemyViewConfig: EnemyViewConfig
  ) {
    this.enemyModel = new EnemyModel(enemyModelConfig);
    this.enemyController = new EnemyController(this.enemyModel);
    this.enemyView = new EnemyView(
      this.enemyModel,
      this.enemyController,
      enemyViewConfig
    );
  }
}
