import { MiniSignal } from "mini-signals";
import { Container, Sprite } from "pixi.js";
import { App } from "../../../../../../Application";
import { SelectedWeapons } from "../../Game/Components/Weapon/SelectedWeapons";
import { WeaponsConfig } from "../../Game/Configs/WeaponsConfig";
import { WeaponSection } from "./WeaponSection";

export class WeaponSelectionMenu extends Container {
  private weaponSections: WeaponSection[];
  private menuWidth: number;
  private menuHeight: number;
  public isReady: MiniSignal;

  private readinessOfAllSections: boolean[];
  public constructor() {
    super();
    this.menuWidth = (App.width / 10) * 7;
    this.menuHeight = (App.height / 10) * 6;
    this.x = App.width / 2 - this.menuWidth / 2;
    this.y = App.height / 2 - this.menuHeight / 2;
    this.readinessOfAllSections = [false, false, false];
    this.isReady = new MiniSignal<[boolean]>();
    this.SetBackground();
    this.setWeaponSections();
  }

  private SetBackground(): void {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x4a4e64);
    graphics.drawRect(0, 0, this.menuWidth, this.menuHeight);
    graphics.endFill();
    this.addChild(graphics);
  }

  private setWeaponSections(): void {
    const weaponsConfig = new WeaponsConfig();
    const sectionWidth = this.menuWidth / 3 - 12.5;
    const sectionHeight = this.menuHeight - 20;
    this.weaponSections = [
      new WeaponSection(
        0,
        "Melee",
        10,
        10,
        sectionWidth,
        sectionHeight,
        weaponsConfig.meleeWeapons
      ),
      new WeaponSection(
        1,
        "Range",
        sectionWidth + 20,
        10,
        sectionWidth,
        sectionHeight,
        weaponsConfig.rangeWeapons
      ),
      new WeaponSection(
        2,
        "Magic",
        sectionWidth * 2 + 30,
        10,
        sectionWidth,
        sectionHeight,
        weaponsConfig.magicWeapons
      ),
    ];
    this.weaponSections.forEach((weaponSection) => {
      const weaponSectionIsChanged = this.weaponSectionIsChanged.bind(this);
      weaponSection.IsReady.add(weaponSectionIsChanged);
    });
    this.addChild(this.weaponSections[0]);
    this.addChild(this.weaponSections[1]);
    this.addChild(this.weaponSections[2]);
  }

  private weaponSectionIsChanged(sectionNumber: number, ready: boolean): void {
    this.readinessOfAllSections[sectionNumber] = ready;
    this.checkReadinessOfMenu();
  }

  private checkReadinessOfMenu(): void {
    for (let i = 0; i < this.readinessOfAllSections.length; i++) {
      if (this.readinessOfAllSections[i] == false) {
        this.isReady.dispatch(false);
        return;
      }
    }
    this.isReady.dispatch(true);
  }
}
