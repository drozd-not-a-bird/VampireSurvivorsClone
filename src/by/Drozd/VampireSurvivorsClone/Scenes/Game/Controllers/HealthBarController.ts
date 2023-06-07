import { HealthBarModel } from "../Models/HealthBarModel";

export class HealthBarController {
  private static instance: HealthBarController;
  private healthBarModel: HealthBarModel;

  private constructor(healthBarModel: HealthBarModel) {
    this.healthBarModel = healthBarModel;
  }

  public static getInstance(healthBarModel?: HealthBarModel): HealthBarController {
    if (!HealthBarController.instance && healthBarModel) {
      HealthBarController.instance = new HealthBarController(healthBarModel);
    }
    else if(!HealthBarController.instance && !healthBarModel) {
      throw new Error("There is not healthBarModel for HealthBarController instance");
    }
    return HealthBarController.instance;
  }

  public setHealth(health: number): void {
    this.healthBarModel.setHealth(health);
  }
}