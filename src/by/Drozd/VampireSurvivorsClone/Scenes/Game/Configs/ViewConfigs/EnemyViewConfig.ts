import { Spritesheet } from "pixi.js";

export class EnemyViewConfig {
  public readonly name: string;
  public readonly animationSpeed: number;
  public readonly width: number;
  public readonly height: number;
  public readonly enemySpriteSheet: Spritesheet;

  public constructor(
    name: string,
    animationSpeed: number,
    width: number,
    height: number,
    enemySpriteSheet: Spritesheet
  ) {
    this.name = name;
    this.animationSpeed = animationSpeed;
    this.width = width;
    this.height = height;
    this.enemySpriteSheet = enemySpriteSheet;
  }
}
