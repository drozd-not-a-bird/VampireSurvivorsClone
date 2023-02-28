import { EnemyConfig } from "../../Configs/EnemyConfig";

export abstract class Enemy {
  health: number;
  movementSpeed: number;
  attackSpeed: number;
  attackRange: number;
  damage: number;
  attackType: number;

  constructor(enemyConfig: EnemyConfig) {
    this.health = enemyConfig.health;
    this.movementSpeed = enemyConfig.movementSpeed;
    this.attackSpeed = enemyConfig.attackSpeed;
    this.attackRange = enemyConfig.attackRange;
    this.damage = enemyConfig.damage;
    this.attackType = enemyConfig.attackType;
    console.log("Enemy was created!");
  }
}
