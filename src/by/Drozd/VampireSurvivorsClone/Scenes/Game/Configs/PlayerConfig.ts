import { AttackType } from "../Components/AttackType/AttackType";

export class PlayerConfig {
  health: number;
  movementSpeed: number;
  attackSpeed: number;
  attackRange: number;
  damage: number;
  attackType: AttackType;

  constructor() {
    this.health = 50;
    this.movementSpeed = 20;
    this.attackSpeed = 1;
    this.attackRange = 1;
    this.damage = 1;
    this.attackType = AttackType.weakSwordStrike;
  }
}
