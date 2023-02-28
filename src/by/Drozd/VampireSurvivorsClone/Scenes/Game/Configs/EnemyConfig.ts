export abstract class EnemyConfig {
  health: number;
  movementSpeed: number;
  attackSpeed: number;
  attackRange: number;
  damage: number;
  attackType: number;

  constructor(
    health: number,
    movementSpeed: number,
    attackSpeed: number,
    attackRange: number,
    damage: number,
    attackType: number
  ) {
    this.health = health;
    this.movementSpeed = movementSpeed;
    this.attackSpeed = attackSpeed;
    this.attackRange = attackRange;
    this.damage = damage;
    this.attackType = attackType;
  }
}
