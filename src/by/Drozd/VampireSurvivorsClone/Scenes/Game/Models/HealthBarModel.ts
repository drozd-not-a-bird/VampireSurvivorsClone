import { MiniSignal } from "mini-signals";

export class HealthBarModel {
  public readonly playerMaxHealth: number;
  public healthIsChanged: MiniSignal;

  public constructor(playerMaxHealth: number) {
    this.playerMaxHealth = playerMaxHealth;
    this.healthIsChanged = new MiniSignal<[number]>();
  }

  public setHealth(health: number): void {
    this.healthIsChanged.dispatch(health);
  }
}
