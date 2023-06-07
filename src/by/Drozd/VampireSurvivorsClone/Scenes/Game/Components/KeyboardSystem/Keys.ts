import { KeysConfig } from "../../Configs/ViewConfigs/KeysConfig";

export class Keys {
  public readonly upValue: string;
  public readonly downValue: string;
  public readonly leftValue: string;
  public readonly rightValue: string;
  public upIsPressed: boolean;
  public downIsPressed: boolean;
  public leftIsPressed: boolean;
  public rightIsPressed: boolean;

  public constructor() {
    this.upValue = KeysConfig.up;
    this.downValue = KeysConfig.down;
    this.leftValue = KeysConfig.left;
    this.rightValue = KeysConfig.right;
    this.upIsPressed = false;
    this.downIsPressed = false;
    this.leftIsPressed = false;
    this.rightIsPressed = false;
  }
}
