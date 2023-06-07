import { Weapon } from "./Weapon";

export class RangeWeapon extends Weapon {
  public constructor(
    name: string,
    damage: number,
    attackSpeed: number,
    attackRange: number
  ) {
    super(name, damage, attackSpeed, attackRange);
  }
}
