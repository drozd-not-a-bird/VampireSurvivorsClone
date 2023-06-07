import { MagicWeapon } from "./MagicWeapon";
import { MeleeWeapon } from "./MeleeWeapon";
import { RangeWeapon } from "./RangeWeapon";

export class SelectedWeapons {
  public static instance: SelectedWeapons;
  private meleeWeapon: MeleeWeapon;
  private rangeWeapon: RangeWeapon;
  private magicWeapon: MagicWeapon;

  private constructor() {}

  public static getInstance(): SelectedWeapons {
    if (!SelectedWeapons.instance) {
      SelectedWeapons.instance = new SelectedWeapons();
    }
    return SelectedWeapons.instance;
  }

  public setMeleeWeapon(meleeWeapon: MeleeWeapon): void {
    this.meleeWeapon = meleeWeapon;
  }

  public getMeleeWeapon(): MeleeWeapon {
    return this.meleeWeapon;
  }

  public setRangeWeapon(rangeWeapon: RangeWeapon): void {
    this.rangeWeapon = rangeWeapon;
  }

  public getRangeWeapon(): RangeWeapon {
    return this.rangeWeapon;
  }

  public setMagicWeapon(magicWeapon: MagicWeapon): void {
    this.magicWeapon = magicWeapon;
  }

  public getMagicWeapon(): MagicWeapon {
    return this.magicWeapon;
  }

  public logSelectedWeapons(): void {
    console.log(this.meleeWeapon);
    console.log(this.rangeWeapon);
    console.log(this.magicWeapon);
  }
}
