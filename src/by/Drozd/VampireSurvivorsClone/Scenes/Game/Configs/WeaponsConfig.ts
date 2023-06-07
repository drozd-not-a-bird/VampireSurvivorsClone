import { MagicWeapon } from "../Components/Weapon/MagicWeapon";
import { MeleeWeapon } from "../Components/Weapon/MeleeWeapon";
import { RangeWeapon } from "../Components/Weapon/RangeWeapon";
import { meleeWeapons } from "../../../Configs/Weapons/meleeWeapons.json";
import { rangeWeapons } from "../../../Configs/Weapons/rangeWeapons.json";
import { magicWeapons } from "../../../Configs/Weapons/magicWeapons.json";

export class WeaponsConfig {
  public readonly meleeWeapons: MeleeWeapon[] = [];
  public readonly rangeWeapons: RangeWeapon[] = [];
  public readonly magicWeapons: MagicWeapon[] = [];

  public constructor() {
    this.setMeleeWeapons();
    this.setRangeWeapons();
    this.setMagicWeapons();
  }

  private setMeleeWeapons(): void {
    this.meleeWeapons.push(
      new MeleeWeapon(
        meleeWeapons.sword.name,
        meleeWeapons.sword.damage,
        meleeWeapons.sword.attackSpeed,
        meleeWeapons.sword.attackRange
      )
    );
    this.meleeWeapons.push(
      new MeleeWeapon(
        meleeWeapons.spear.name,
        meleeWeapons.spear.damage,
        meleeWeapons.spear.attackSpeed,
        meleeWeapons.spear.attackRange
      )
    );
  }

  private setRangeWeapons(): void {
    this.rangeWeapons.push(
      new RangeWeapon(
        rangeWeapons.bow.name,
        rangeWeapons.bow.damage,
        rangeWeapons.bow.attackSpeed,
        rangeWeapons.bow.attackRange
      )
    );
    this.rangeWeapons.push(
      new RangeWeapon(
        rangeWeapons.crossbow.name,
        rangeWeapons.crossbow.damage,
        rangeWeapons.crossbow.attackSpeed,
        rangeWeapons.crossbow.attackRange
      )
    );
  }

  private setMagicWeapons(): void {
    this.magicWeapons.push(
      new MagicWeapon(
        magicWeapons.fireball.name,
        magicWeapons.fireball.damage,
        magicWeapons.fireball.attackSpeed,
        magicWeapons.fireball.attackRange
      )
    );
    this.magicWeapons.push(
      new MagicWeapon(
        magicWeapons.lightning.name,
        magicWeapons.lightning.damage,
        magicWeapons.lightning.attackSpeed,
        magicWeapons.lightning.attackRange
      )
    );
  }
}
