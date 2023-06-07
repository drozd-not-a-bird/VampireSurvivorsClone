import { MiniSignal } from "mini-signals";
import { Container, Graphics, Texture } from "pixi.js";
import { Label } from "../../../UI/Labels/Label";
import { WeaponNameLabel } from "../../../UI/Labels/WeaponNameLabel";
import { UIComponent } from "../../../UI/UIComponents";
import { SelectedWeapons } from "../../Game/Components/Weapon/SelectedWeapons";
import { Weapon } from "../../Game/Components/Weapon/Weapon";

export class WeaponSectionElement extends Container {
  private type: string;
  private weapon: Weapon;
  private weaponNumber: number;
  private sectionWidth: number;
  private sectionHeight: number;
  private isPressed: boolean;
  public isActive: MiniSignal;
  private background: Graphics;
  private selectedWeapons: SelectedWeapons;

  public constructor(
    type: string,
    weaponNumber: number,
    weapon: Weapon,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    super();
    this.type = type;
    this.weapon = weapon;
    this.weaponNumber = weaponNumber;
    this.sectionWidth = width;
    this.sectionHeight = height;
    this.interactive = true;
    this.isPressed = false;
    this.isActive = new MiniSignal<[number]>();
    this.selectedWeapons = SelectedWeapons.getInstance();
    this.setPosition(x, y);
    this.setClicking();
    this.setBackground();
    this.fillInSection();
  }

  private setPosition(x: number, y: number): void {
    this.x = x + 10;
    this.y = y;
  }

  private setClicking(): void {
    this.on("click", this.pressed);
  }

  private pressed(): void {
    if (this.isPressed == false) {
      this.setGrayBackground();
      this.isPressed = true;
      this.setSelectedWeapon();
      this.isActive.dispatch(this.weaponNumber);
    } else {
      this.setNormalBackground();
      this.isPressed = false;
      this.isActive.dispatch(this.weaponNumber);
    }
  }

  public unPressed(): void {
    this.setNormalBackground();
    this.isPressed = false;
  }

  private setGrayBackground(): void {
    this.background.alpha = 0.5;
  }

  private setNormalBackground(): void {
    this.background.alpha = 1;
  }

  private setSelectedWeapon(): void {
    if(this.type == "Melee") {
      this.selectedWeapons.setMeleeWeapon(this.weapon);
    }
    else if(this.type == "Range") {
      this.selectedWeapons.setRangeWeapon(this.weapon);
    }
    else if(this.type == "Magic") {
      this.selectedWeapons.setMagicWeapon(this.weapon);
    }
  }

  private setBackground(): void {
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x858bad);
    graphics.drawRect(0, 0, this.sectionWidth, this.sectionHeight);
    graphics.endFill();
    this.background = graphics;
    this.addChild(graphics);
  }

  private fillInSection(): void {
    this.setWeaponIcon();
    this.setWeaponName();
    this.setWeaponCharacteristics();
  }

  private setWeaponIcon(): void {
    const weaponIco = new UIComponent(this.weapon.icon);
    weaponIco.x = 10;
    weaponIco.y = 10;
    weaponIco.width = 100;
    weaponIco.height = 100;
    this.addChild(weaponIco);
  }

  private setWeaponName(): void {
    const weaponName = new WeaponNameLabel(this.weapon.name.toUpperCase());
    weaponName.x = this.sectionWidth / 2 - weaponName.width / 2;
    weaponName.y = 10;
    this.addChild(weaponName);
  }

  private setWeaponCharacteristics(): void {
    this.setAttackRange();
    this.setAttackSpeed();
    this.setDamage();
  }

  private setAttackRange(): void {
    const attackRange = new Label("Attack range: " + this.weapon.attackRange);
    attackRange.x = this.sectionWidth / 2 - attackRange.width / 2;; //this.sectionWidth / 2 - attackRange.width / 2;
    attackRange.y = 60;
    this.addChild(attackRange);
  }

  private setAttackSpeed(): void {
    const attackSpeed = new Label("Attack speed: " + this.weapon.attackSpeed);
    attackSpeed.x = this.sectionWidth / 2 - attackSpeed.width / 2; //this.sectionWidth / 2 - attackSpeed.width / 2;
    attackSpeed.y = 120;
    this.addChild(attackSpeed);
  }

  private setDamage(): void {
    const damage = new Label("Damage: " + this.weapon.damage);
    damage.x = this.sectionWidth / 2 - damage.width / 2;; //this.sectionWidth / 2 - damage.width / 2;
    damage.y = 180;
    this.addChild(damage);
  }
}
