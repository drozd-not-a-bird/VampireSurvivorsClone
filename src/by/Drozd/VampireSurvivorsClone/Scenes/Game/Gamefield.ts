import { Container } from "pixi.js";
import { App } from "../../../../../Application";
import { Background } from "./Components/Background/Background";
import { CollisionDetector } from "./Components/CollisionDetector/CollisionDetector";
import { EnemySpawner } from "./Components/Enemy/EnemySpawner";
import { GameStopButton } from "./Components/GameStopButton/GameStopButton";
import { GamefieldModelConfig } from "./Configs/ModelConfigs/GamefieldModelConfig";
import { GamefieldViewConfig } from "./Configs/ViewConfigs/GamefieldViewConfig";
import { HealthBarController } from "./Controllers/HealthBarController";
import { PlayerController } from "./Controllers/PlayerController";
import { WeaponsController } from "./Controllers/WeaponsController";
import { HealthBarModel } from "./Models/HealthBarModel";
import { PlayerModel } from "./Models/PlayerModel";
import { TimerModel } from "./Models/TimerModel";
import { WeaponsModel } from "./Models/WeaponsModel";
import { HealthBarView } from "./Views/HealthBarView";
import { PlayerView } from "./Views/PlayerView";
import { TimerView } from "./Views/TimerView";
import { WeaponsView } from "./Views/WeaponsView";

export class Gamefield extends Container {
  private static instance: Gamefield;
  private modelConfig: GamefieldModelConfig;
  private viewConfig: GamefieldViewConfig;

  private constructor() {
    super();
    this.setTransforms();
    this.addConfigs();
  }

  public startGame(): void {
    this.generateBackground();
    this.generateEnemys();
    this.generateHealthBar();
    this.generatePlayer();
    this.generateWeapons();
    this.generateTimer();
    this.generateCollisionDetector();
    this.generateStopButton();
  }

  public static getInstance(): Gamefield {
    if (!Gamefield.instance) {
      Gamefield.instance = new Gamefield();
    }
    return Gamefield.instance;
  }

  private setTransforms(): void {
    this.x = App.width / 2;
    this.y = App.height / 2;
  }

  private addConfigs(): void {
    this.modelConfig = new GamefieldModelConfig();
    this.viewConfig = new GamefieldViewConfig();
  }

  private generateBackground(): void {
    const background = Background.getInstance(this.viewConfig.backgroundConfig);
    background.x -= background.getWidth() / 2;
    background.y -= background.getHeight() / 2;
    background.generateCoordinatesOfTheSides();
    this.addChild(background);
  }

  private generatePlayer(): void {
    const playerModel = PlayerModel.getInstance(
      this.modelConfig.playerModelConfig
    );
    const playerController = new PlayerController(playerModel);
    const playerView = PlayerView.getInstance(
      playerModel,
      this.viewConfig.playerViewConfig
    );
    this.addChild(playerView);
  }

  private generateWeapons(): void {
    const weaponsModel = new WeaponsModel();
    const weaponsController = new WeaponsController(weaponsModel);
    const weaponsView = new WeaponsView(weaponsModel, weaponsController);
    this.addChild(weaponsView);
  }

  private generateTimer(): void {
    const timerModel = TimerModel.getInstance();
    timerModel.startTimer();
    const timerView = new TimerView(timerModel);
    this.addChild(timerView);
  }

  private generateEnemys(): void {
    const enemySpawner = EnemySpawner.getInstance(
      this.modelConfig.enemySpawnConfig,
      this.modelConfig.enemysModelsConfigs,
      this.viewConfig.enemysViewsConfigs
    );
  }

  private generateHealthBar(): void {
    const healthBarModel = new HealthBarModel(
      this.modelConfig.playerModelConfig.health
    );
    const healthBarController = HealthBarController.getInstance(healthBarModel);
    const healthBarView = new HealthBarView(
      healthBarModel,
      healthBarController
    );
    this.addChild(healthBarView);
  }

  private generateCollisionDetector(): void {
    const collisionDetector = CollisionDetector.getInstance();
  }

  private generateStopButton(): void {
    const gameStopButton = new GameStopButton();
    this.addChild(gameStopButton);
  }
}
