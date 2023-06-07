import { MiniSignal } from "mini-signals";
import { Container } from "pixi.js";
import { SectionLabel } from "../../../UI/Labels/SectionLabel";
import { Weapon } from "../../Game/Components/Weapon/Weapon";
import { WeaponSectionElement } from "./WeaponSectionElement";

export class WeaponSection extends Container {
  private sectionNumber: number;
  private sectionName: string;
  private sectionWidth: number;
  private sectionHeight: number;
  private weapons: Weapon[];
  private selectedWeaponNumber: number;
  private label: SectionLabel;
  public IsReady: MiniSignal;
  private weaponElements: WeaponSectionElement[];
  //private weaponsUniqueSymbols: Symbol[];

  public constructor(
    sectionNumber: number,
    name: string,
    x: number,
    y: number,
    width: number,
    height: number,
    weapons: Weapon[]
  ) {
    super();
    this.sectionNumber = sectionNumber;
    this.sectionName = name;
    this.sectionWidth = width;
    this.sectionHeight = height;
    this.x = x;
    this.y = y;
    this.selectedWeaponNumber = undefined;
    this.weapons = weapons;
    this.IsReady = new MiniSignal<[number, boolean]>();
    this.weaponElements = [];
    this.setBackground();
    this.setSectionName();
    this.setWeapons();
  }

  private setBackground(): void {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x686d89);
    graphics.drawRect(0, 0, this.sectionWidth, this.sectionHeight);
    graphics.endFill();
    this.addChild(graphics);
  }

  private setSectionName(): void {
    const label = new SectionLabel(this.sectionName);
    label.x = this.sectionWidth / 2 - label.width / 2;
    label.y = 0;
    this.label = label;
    this.addChild(label);
  }

  private setWeapons(): void {
    const weaponsNumber = this.weapons.length;
    for (let weapon = 0; weapon < weaponsNumber; weapon++) {
      const weaponSectionElement = new WeaponSectionElement(
        this.sectionName,
        weapon,
        this.weapons[weapon],
        0,
        this.label.height +
          10 +
          weapon *
            ((this.sectionHeight - this.label.height - 10) / weaponsNumber),
        this.sectionWidth - 20,
        (this.sectionHeight - 10 * weaponsNumber - 10 - this.label.height) /
          weaponsNumber
      );
      const weaponElementIsPressed = this.weaponElementIsPressed.bind(this);
      weaponSectionElement.isActive.add(weaponElementIsPressed);
      this.weaponElements.push(weaponSectionElement);
      this.addChild(weaponSectionElement);
    }
  }

  private weaponElementIsPressed(weaponNumber: number): void {
    if (this.selectedWeaponNumber == undefined) {
      this.selectedWeaponNumber = weaponNumber;
      this.IsReady.dispatch(this.sectionNumber, true);
    } else if (this.selectedWeaponNumber == weaponNumber) {
      this.weaponElements[weaponNumber].unPressed();
      this.selectedWeaponNumber = undefined;
      this.IsReady.dispatch(this.sectionNumber, false);
    } else if (this.selectedWeaponNumber != weaponNumber) {
      this.weaponElements[this.selectedWeaponNumber].unPressed();
      this.selectedWeaponNumber = weaponNumber;
      this.IsReady.dispatch(this.sectionNumber, true);
    }
  }
}
