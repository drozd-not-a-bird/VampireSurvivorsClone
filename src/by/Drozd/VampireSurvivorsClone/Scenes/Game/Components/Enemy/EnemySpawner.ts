import { MiniSignal } from "mini-signals";
import { Container } from "pixi.js";
import { EnemysModelsConfigs } from "../../Configs/ModelConfigs/EnemysModelsConfigs";
import { EnemySpawnConfig } from "../../Configs/ModelConfigs/EnemySpawnConfig";
import { EnemysViewsConfigs } from "../../Configs/ViewConfigs/EnemysViewsConfigs";
import { Gamefield } from "../../Gamefield";
import { TimerModel } from "../../Models/TimerModel";
import { EnemyView } from "../../Views/EnemyView";
import { EnemyFactory } from "./EnemyFactory";

export class EnemySpawner {
  private static instance: EnemySpawner;
  private timerModel: TimerModel;
  private enemyFactory: EnemyFactory;
  private enemySpawnConfig: EnemySpawnConfig;
  private enemysNumber: number;
  private enemysContainer: Container;
  public enemyWasCreated: MiniSignal;

  private constructor(
    spawnConfig: EnemySpawnConfig,
    enemysModelsConfigs: EnemysModelsConfigs,
    enemysViewsConfigs: EnemysViewsConfigs
  ) {
    this.enemySpawnConfig = spawnConfig;
    this.timerModel = TimerModel.getInstance();
    this.enemysContainer = new Container();
    const gamefield = Gamefield.getInstance();
    gamefield.addChild(this.enemysContainer);
    this.enemyFactory = new EnemyFactory(
      enemysModelsConfigs,
      enemysViewsConfigs
    );
    this.enemysNumber = 0;
    this.enemyWasCreated = new MiniSignal<[EnemyView]>();
    this.connectToTimerModel();
  }

  public static getInstance(
    spawnConfig?: EnemySpawnConfig,
    enemysModelsConfigs?: EnemysModelsConfigs,
    enemysViewsConfigs?: EnemysViewsConfigs
  ): EnemySpawner {
    if (
      !EnemySpawner.instance &&
      spawnConfig &&
      enemysModelsConfigs &&
      enemysViewsConfigs
    ) {
      EnemySpawner.instance = new EnemySpawner(
        spawnConfig,
        enemysModelsConfigs,
        enemysViewsConfigs
      );
    } else if (!EnemySpawner.instance) {
      throw new Error("EnemySpawner instance has not been initialized");
    }
    return EnemySpawner.instance;
  }

  private connectToTimerModel(): void {
    this.timerModel.itsTimeForSpawn.add(this.spawn.bind(this));
  }

  private spawn(minutes: number): void {
    if (this.enemysNumber < 5) {
      const enemyName = this.getRandomString(
        this.enemySpawnConfig.enemysForSpawn[minutes]
      );
      const enemyView = this.enemyFactory.createEnemy(enemyName);
      this.enemysContainer.addChild(enemyView);
      this.enemyWasCreated.dispatch(enemyView);
      this.enemysNumber++;
    }
  }

  private getRandomString(strings: string[]): string {
    if (strings.length === 0) {
      throw new Error("The array of strings is empty.");
    }
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
  }
}
