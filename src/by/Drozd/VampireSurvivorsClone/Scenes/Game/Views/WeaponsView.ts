import { Ticker } from "pixi.js";
import { App } from "../../../../../../Application";
import { Label } from "../../../UI/Labels/Label";
import { UIComponent } from "../../../UI/UIComponents";
import { View } from "../../../UI/View";
import { WeaponsController } from "../Controllers/WeaponsController";
import { Gamefield } from "../Gamefield";
import { WeaponsModel } from "../Models/WeaponsModel";

export class WeaponsView extends View {
  private weaponsModel: WeaponsModel;
  private weaponsController: WeaponsController;
  private gamefield: Gamefield;
  private meleeWeaponLevel: number;
  private rangeWeaponLevel: number;
  private magicWeaponLevel: number;

  public constructor(
    weaponsModel: WeaponsModel,
    weaponsController: WeaponsController
  ) {
    super();
    this.weaponsModel = weaponsModel;
    this.weaponsController = weaponsController;
    this.gamefield = Gamefield.getInstance();
    this.meleeWeaponLevel = weaponsModel.meleeWeapon.level;
    this.rangeWeaponLevel = weaponsModel.rangeWeapon.level;
    this.magicWeaponLevel = weaponsModel.magicWeapon.level;
    this.generateWeaponSections();
    this.createTicker();
  }

  private generateWeaponSections(): void {
    this.generateMeleeWeaponSection();
    this.generateRangeWeaponSection();
    this.generateMagicWeaponSection();
  }

  private generateMeleeWeaponSection(): void {
    const weaponIco = new UIComponent(this.weaponsModel.meleeWeapon.icon);
    weaponIco.width = 100;
    weaponIco.height = 100;
    this.addChild(weaponIco);
    const weaponLabel = new Label("Level: " + this.meleeWeaponLevel);
    weaponLabel.x = 110;
    weaponLabel.y = 30;
    this.addChild(weaponLabel);
  }

  private generateRangeWeaponSection(): void {
    const weaponIco = new UIComponent(this.weaponsModel.rangeWeapon.icon);
    weaponIco.width = 100;
    weaponIco.height = 100;
    weaponIco.y = 120;
    this.addChild(weaponIco);
    const weaponLabel = new Label("Level: " + this.rangeWeaponLevel);
    weaponLabel.x = 110;
    weaponLabel.y = 150;
    this.addChild(weaponLabel);
  }

  private generateMagicWeaponSection(): void {
    const weaponIco = new UIComponent(this.weaponsModel.magicWeapon.icon);
    weaponIco.width = 100;
    weaponIco.height = 100;
    weaponIco.y = 240;
    this.addChild(weaponIco);
    const weaponLabel = new Label("Level: " + this.magicWeaponLevel);
    weaponLabel.x = 110;
    weaponLabel.y = 270;
    this.addChild(weaponLabel);
  }

  private createTicker(): void {
    const ticker = Ticker.shared;
    ticker.add(this.holdLabel.bind(this));
  }

  private holdLabel(): void {
    this.x = this.gamefield.pivot.x - App.width / 2;
    this.y = this.gamefield.pivot.y - App.height / 2;
  }
}
