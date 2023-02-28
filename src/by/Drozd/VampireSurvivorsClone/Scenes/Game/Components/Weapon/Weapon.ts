import { WeaponConfig } from "../../Configs/WeaponConfig";
import { AttackType } from "../AttackType/AttackType";

export abstract class Weapon {
  damage: number;
  attackSpeed: number;
  attackRange: number;
  attackType: AttackType;

  constructor(weaponConfig: WeaponConfig) {
    this.damage = weaponConfig.damage;
    this.attackSpeed = weaponConfig.attackSpeed;
    this.attackRange = weaponConfig.attackRange;
    this.attackType = weaponConfig.attackType;
    console.log("Weapon was created!");
  }
}
