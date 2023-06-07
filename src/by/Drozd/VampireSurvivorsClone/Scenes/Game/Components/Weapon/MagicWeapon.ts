import { Weapon } from "./Weapon";

export class MagicWeapon extends Weapon {
  public constructor(
    name: string,
    damage: number,
    attackSpeed: number,
    attackRange: number
  ) {
    super(name, damage, attackSpeed, attackRange);
  }
}