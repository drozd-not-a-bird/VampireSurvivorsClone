import { PlayerConfig } from "../../Configs/PlayerConfig";
import { AttackType } from "../AttackType/AttackType";

export class PlayerModel {
  health: number;
  movementSpeed: number;
  attackSpeed: number;
  attackRange: number;
  damage: number;
  attackType: AttackType;

  constructor(playerConfig: PlayerConfig) {
    this.health = playerConfig.health;
    this.movementSpeed = playerConfig.movementSpeed;
    this.attackSpeed = playerConfig.attackSpeed;
    this.attackRange = playerConfig.attackRange;
    this.damage = playerConfig.damage;
    this.attackType = playerConfig.attackType;
    console.log("Player was created!");
  }
}
