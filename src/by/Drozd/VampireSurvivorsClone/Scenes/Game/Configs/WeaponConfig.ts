import { AttackType } from "../Components/AttackType/AttackType";

export class WeaponConfig {
  damage: number;
  attackSpeed: number;
  attackRange: number;
  attackType: AttackType;

  constructor(
    damage: number,
    attackSpeed: number,
    attackRange: number,
    attackType: AttackType
  ) {
    this.damage = damage;
    this.attackSpeed = attackSpeed;
    this.attackRange = attackRange;
    this.attackType = attackType;
  }
}
