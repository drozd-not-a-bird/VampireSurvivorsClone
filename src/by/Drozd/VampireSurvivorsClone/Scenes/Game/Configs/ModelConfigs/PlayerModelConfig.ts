import { player } from "../../../../Configs/Player/Player.json";
import { Weapon } from "../../Components/Weapon/Weapon";

export class PlayerModelConfig {
  public readonly x: number;
  public readonly y: number;
  public readonly width: number;
  public readonly height: number;
  public readonly health: number;
  public readonly movementSpeed: number;
  public readonly attackSpeed: number;
  public readonly attackRange: number;
  public readonly damage: number;
  public readonly weapons: Weapon;

  public constructor() {
    this.x = player.x;
    this.y = player.y;
    this.width = player.width;
    this.height = player.height;
    this.health = player.health;
    this.movementSpeed = player.movementSpeed;
    this.attackSpeed = player.attackSpeed;
    this.attackRange = player.attackRange;
    this.damage = player.damage;
    //this.weapon = new Weapon()
  }
}
