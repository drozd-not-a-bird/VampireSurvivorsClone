import { PlayerModel } from "../../Models/PlayerModel";

export class EnemyModelConfig {
  public readonly name: string;
  public readonly health: number;
  public readonly movementSpeed: number;
  public readonly attackSpeed: number;
  public readonly attackRange: number;
  public readonly damage: number;

  public constructor(
    name: string,
    health: number,
    movementSpeed: number,
    attackSpeed: number,
    attackRange: number,
    damage: number
  ) {
    this.name = name;
    this.health = health;
    this.movementSpeed = movementSpeed;
    this.attackSpeed = attackSpeed;
    this.attackRange = attackRange;
    this.damage = damage;
  }
}
