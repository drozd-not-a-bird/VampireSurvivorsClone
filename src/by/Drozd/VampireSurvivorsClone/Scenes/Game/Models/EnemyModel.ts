import { MiniSignal } from "mini-signals";
import { App } from "../../../../../../Application";
import { EnemyModelConfig } from "../Configs/ModelConfigs/EnemyModelConfig";
import { PlayerModel } from "./PlayerModel";

export class EnemyModel {
  private _x: number;
  public get x(): number {
    return this._x;
  }
  private _y: number;
  public get y(): number {
    return this._y;
  }
  private playerModel: PlayerModel;
  public readonly health: number;
  public readonly movementSpeed: number;
  public readonly attackSpeed: number;
  public readonly attackRange: number;
  public readonly damage: number;
  public isMoving: MiniSignal;

  public constructor(enemyModelConfig: EnemyModelConfig) {
    this.playerModel = PlayerModel.getInstance();
    this.generateSpawnPosition();
    this.health = enemyModelConfig.health;
    this.movementSpeed = enemyModelConfig.movementSpeed;
    this.attackSpeed = enemyModelConfig.attackSpeed;
    this.attackRange = enemyModelConfig.attackRange;
    this.damage = enemyModelConfig.damage;
    this.isMoving = new MiniSignal<[number, number, number]>();
  }

  private generateSpawnPosition(): void {
    // random number from 1 to 4
    const side = Math.floor(Math.random() * 4) + 1;
    switch (side) {
      //up side
      case 1: {
        this._x =
          Math.floor(Math.random() * (this.playerModel.x + App.width / 2)) +
          (this.playerModel.x - App.width / 2);
        this._y = this.playerModel.y - App.height / 2;
        break;
      }
      //right side
      case 2: {
        this._x = this.playerModel.x + App.width / 2;
        this._y =
          Math.floor(Math.random() * (this.playerModel.y + App.height / 2)) +
          (this.playerModel.y - App.height / 2);
        break;
      }
      //down side
      case 3: {
        this._x =
          Math.floor(Math.random() * (this.playerModel.x + App.width / 2)) +
          (this.playerModel.x - App.width / 2);
        this._y = this.playerModel.y + App.height / 2;
        break;
      }
      //left side
      case 4: {
        this._x = this.playerModel.x - App.width / 2;
        this._y =
          Math.floor(Math.random() * (this.playerModel.y + App.height / 2)) +
          (this.playerModel.y - App.height / 2);
        break;
      }
    }
  }

  public move(): void {
    // Calculate direction towards the player
    const playerX = this.playerModel.x;
    const playerY = this.playerModel.y;
    const directionX = playerX - this._x;
    const directionY = playerY - this._y;
    // Normalize the direction vector
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    const normalizedDirectionX = directionX / length;
    const normalizedDirectionY = directionY / length;
    // Move towards the player based on the movement speed
    this._x += normalizedDirectionX * this.movementSpeed;
    this._y += normalizedDirectionY * this.movementSpeed;
    this.isMoving.dispatch(this._x, this._y, playerX);
  }

  public attack(): void {}

  public takeAttack(): void {}

  public die(): void {}
}
