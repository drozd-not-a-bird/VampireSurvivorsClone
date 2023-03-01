import { AnimatedSprite } from "pixi.js";
import { AttackType } from "../Components/AttackType/AttackType";

export class PlayerConfig {
  public health: number;
  public movementSpeed: number;
  public attackSpeed: number;
  public attackRange: number;
  public damage: number;
  public attackType: AttackType;
  public playerAnimationStaying: AnimatedSprite;

  constructor() {
    this.health = 50;
    this.movementSpeed = 20;
    this.attackSpeed = 1;
    this.attackRange = 1;
    this.damage = 1;
    this.attackType = AttackType.weakSwordStrike;
    //const spritesheet = new PIXI.Spritesheet(PIXI.BaseTexture.from("assets/Player/playerStaying.json").);
    //this.playerAnimationStaying = PIXI.AnimatedSprite.from("assets/Player/playerStaying.json")
  }
}
