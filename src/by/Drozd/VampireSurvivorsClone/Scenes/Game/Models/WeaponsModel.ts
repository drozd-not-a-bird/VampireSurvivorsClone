import { MagicWeapon } from "../Components/Weapon/MagicWeapon";
import { MeleeWeapon } from "../Components/Weapon/MeleeWeapon";
import { RangeWeapon } from "../Components/Weapon/RangeWeapon";
import { SelectedWeapons } from "../Components/Weapon/SelectedWeapons";

export class WeaponsModel {
  public readonly meleeWeapon: MeleeWeapon;
  public readonly rangeWeapon: RangeWeapon;
  public readonly magicWeapon: MagicWeapon;

  public constructor() {
    const selectedWeapons = SelectedWeapons.getInstance();
    this.meleeWeapon = selectedWeapons.getMeleeWeapon();
    this.rangeWeapon = selectedWeapons.getRangeWeapon();
    this.magicWeapon = selectedWeapons.getMagicWeapon();
  }
}
