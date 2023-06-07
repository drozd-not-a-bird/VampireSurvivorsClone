import { AnimatedSprite, Texture } from "pixi.js";
import { ResourceManager } from "../../../../ResourceManagment/ResourceManager";

export abstract class Weapon {
  public readonly icon: Texture;
  public readonly name: string;
  public readonly damage: number;
  public readonly attackSpeed: number;
  public readonly attackRange: number;
  public readonly level: number;
  public readonly attackAnimation: AnimatedSprite;

  public constructor(
    name: string,
    damage: number,
    attackSpeed: number,
    attackRange: number,
  ) {
    this.level = 1;
    this.name = name;
    this.damage = damage;
    this.attackSpeed = attackSpeed;
    this.attackRange = attackRange;
    const resourceManager = ResourceManager.getInstance();
    this.icon = resourceManager.getTexture(name + "_ico");
    this.attackAnimation = resourceManager.getSpritesheet(name).animations.attack;
  }
}
