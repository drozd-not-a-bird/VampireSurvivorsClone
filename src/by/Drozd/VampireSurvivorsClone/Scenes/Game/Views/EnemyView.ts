import { AnimatedSprite, Spritesheet } from "pixi.js";
import { View } from "../../../UI/View";
import { EnemyViewConfig } from "../Configs/ViewConfigs/EnemyViewConfig";
import { EnemyController } from "../Controllers/EnemyController";
import { EnemyModel } from "../Models/EnemyModel";

export class EnemyView extends View {
  private enemyModel: EnemyModel;
  private enemyController: EnemyController;
  private enemyViewConfig: EnemyViewConfig;
  private enemyShape: AnimatedSprite;
  private enemySpriteSheet: Spritesheet;

  public constructor(
    enemyModel: EnemyModel,
    enemyController: EnemyController,
    enemyViewConfig: EnemyViewConfig
  ) {
    super();
    this.enemyModel = enemyModel;
    this.enemyController = enemyController;
    this.enemyViewConfig = enemyViewConfig;
    this.initEnemyShape();
    this.connectToModel();
    this.addCollision();
  }

  private initEnemyShape() {
    this.enemySpriteSheet = this.enemyViewConfig.enemySpriteSheet;
    this.enemyShape = new AnimatedSprite(
      this.enemySpriteSheet.animations.RunRight
    );
    this.enemyShape.anchor.set(0.5);
    this.enemyShape.x = this.enemyModel.x;
    this.enemyShape.y = this.enemyModel.y;
    this.enemyShape.width = this.enemyViewConfig.width;
    this.enemyShape.height = this.enemyViewConfig.height;
    this.enemyShape.animationSpeed = this.enemyViewConfig.animationSpeed;
    this.enemyShape.play();
    this.addChild(this.enemyShape);
  }

  private connectToModel(): void {
    const moveFunc = this.move.bind(this);
    this.enemyModel.isMoving.add(moveFunc);
  }

  private move(x: number, y: number, playerX: number): void {
    this.enemyShape.x = x;
    this.enemyShape.y = y;
    this.changeAnimation(playerX);
  }

  private changeAnimation(playerX: number): void {
    if (playerX < this.enemyShape.x && !this.isRunLeft()) {
      this.setRunLeftAnimation();
    } else if (playerX > this.enemyShape.x && !this.isRunRight()) {
      this.setRunRightAnimation();
    }
  }

  private isRunLeft(): boolean {
    if (this.enemyShape.textures == this.enemySpriteSheet.animations.RunLeft) {
      return true;
    }
    return false;
  }

  private isRunRight(): boolean {
    if (this.enemyShape.textures == this.enemySpriteSheet.animations.RunRight) {
      return true;
    }
    return false;
  }

  private setRunLeftAnimation(): void {
    this.enemyShape.textures = this.enemySpriteSheet.animations.RunLeft;
    this.enemyShape.play();
  }

  private setRunRightAnimation(): void {
    this.enemyShape.textures = this.enemySpriteSheet.animations.RunRight;
    this.enemyShape.play();
  }

  private addCollision(): void {
    this.getBounds();
  }
}
