import { MiniSignal } from "mini-signals";
import { Background } from "../Components/Background/Background";
import { Keys } from "../Components/KeyboardSystem/Keys";
import { Weapon } from "../Components/Weapon/Weapon";
import { PlayerModelConfig } from "../Configs/ModelConfigs/PlayerModelConfig";
import { HealthBarController } from "../Controllers/HealthBarController";

export class PlayerModel {
  private static instance: PlayerModel;
  private _x: number;
  public get x(): number {
    return this._x;
  }
  private _y: number;
  public get y(): number {
    return this._y;
  }
  private halfWidth: number;
  private halfHeight: number;
  private level: number;
  private health: number;
  private movementSpeed: number;
  private attackSpeed: number;
  private attackRange: number;
  private damage: number;
  private weapons: Weapon;
  private background: Background;
  private healthBarController: HealthBarController;
  public isMoving: MiniSignal;

  private constructor(playerModelConfig: PlayerModelConfig) {
    this._x = playerModelConfig.x;
    this._y = playerModelConfig.y;
    this.halfWidth = playerModelConfig.width / 2;
    this.halfHeight = playerModelConfig.height / 2;
    this.health = playerModelConfig.health;
    this.movementSpeed = playerModelConfig.movementSpeed;
    this.attackSpeed = playerModelConfig.attackSpeed;
    this.attackRange = playerModelConfig.attackRange;
    this.damage = playerModelConfig.damage;
    this.background = Background.getInstance();
    this.healthBarController = HealthBarController.getInstance();
    this.isMoving = new MiniSignal<[number, number, Keys]>();
  }

  public static getInstance(
    playerModelConfig?: PlayerModelConfig
  ): PlayerModel {
    if (!PlayerModel.instance && playerModelConfig) {
      PlayerModel.instance = new PlayerModel(playerModelConfig);
    } else if (!PlayerModel.instance && !playerModelConfig) {
      throw new Error(
        "There is not PlayerModelConfig for PlayerModel instance"
      );
    }
    return PlayerModel.instance;
  }

  public move(keys: Keys): void {
    if (
      keys.upIsPressed &&
      this.background.upSideY + this.halfHeight < this._y - this.movementSpeed
    ) {
      this._y -= this.movementSpeed;
    }
    if (
      keys.downIsPressed &&
      this.background.downSideY - this.halfHeight > this._y + this.movementSpeed
    ) {
      this._y += this.movementSpeed;
    }
    if (
      keys.leftIsPressed &&
      this.background.leftSideX + this.halfWidth < this._x - this.movementSpeed
    ) {
      this._x -= this.movementSpeed;
    }
    if (
      keys.rightIsPressed &&
      this.background.rightSideX - this.halfWidth > this._x + this.movementSpeed
    ) {
      this._x += this.movementSpeed;
    }
    this.isMoving.dispatch(this._x, this._y, keys);
  }

  public attack(): void {}

  public getDamage(): void {
    
  }

  public die(): void {}
}
