import { UIComponent } from "../../../../UI/UIComponents";
import { Weapon } from "./Weapon";

export class MeleeWeapon extends Weapon {
  public constructor(
    name: string,
    damage: number,
    attackSpeed: number,
    attackRange: number
  ) {
    super(name, damage, attackSpeed, attackRange);
  }
}
