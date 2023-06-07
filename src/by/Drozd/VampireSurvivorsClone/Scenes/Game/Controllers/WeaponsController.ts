import { WeaponsModel } from "../Models/WeaponsModel";

export class WeaponsController {
  private weaponsModel: WeaponsModel;

  public constructor(weaponsModel: WeaponsModel){
    this.weaponsModel = weaponsModel;
  }
}