import { AnimatedSprite, Spritesheet } from "pixi.js";
import { App } from "../../../../../../Application";
import { View } from "../../../UI/View";
import { Background } from "../Components/Background/Background";
import { Keys } from "../Components/KeyboardSystem/Keys";
import { PlayerViewConfig } from "../Configs/ViewConfigs/PlayerViewConfig";
import { Gamefield } from "../Gamefield";
import { PlayerModel } from "../Models/PlayerModel";

export class PlayerView extends View {
  private static instance: PlayerView;
  private playerModel: PlayerModel;
  private playerViewConfig: PlayerViewConfig;
  private playerShape: AnimatedSprite;
  private playerSpriteSheet: Spritesheet;
  private gamefield: Gamefield;
  private background: Background;
  private LastWasRight: boolean;

  private constructor(
    playerModel: PlayerModel,
    playerViewConfig: PlayerViewConfig
  ) {
    super();
    this.playerModel = playerModel;
    this.playerViewConfig = playerViewConfig;
    this.gamefield = Gamefield.getInstance();
    this.background = Background.getInstance();
    this.LastWasRight = true;
    this.initPlayerShape();
    this.connectToModel();
  }

  public static getInstance(
    playerModel?: PlayerModel,
    playerViewConfig?: PlayerViewConfig
  ): PlayerView {
    if (!PlayerView.instance && playerModel && playerViewConfig) {
      PlayerView.instance = new PlayerView(playerModel, playerViewConfig);
    } else if (!PlayerView.instance) {
      throw new Error("PlayerView instance has not been initialized");
    }
    return PlayerView.instance;
  }

  private initPlayerShape() {
    this.playerSpriteSheet = this.playerViewConfig.playerSpriteSheet;
    this.playerShape = new AnimatedSprite(
      this.playerSpriteSheet.animations.Idle
    );
    this.playerShape.anchor.set(0.5);
    this.playerShape.x = this.playerModel.x;
    this.playerShape.y = this.playerModel.y;
    this.playerShape.width = this.playerViewConfig.width;
    this.playerShape.height = this.playerViewConfig.height;
    this.playerShape.animationSpeed = this.playerViewConfig.animationSpeed;
    this.playerShape.play();
    this.addChild(this.playerShape);
  }

  private connectToModel(): void {
    const moveFunc = this.move.bind(this);
    this.playerModel.isMoving.add(moveFunc);
  }

  private move(x: number, y: number, keys: Keys): void {
    this.playerShape.x = x;
    this.playerShape.y = y;
    if (
      x > this.background.leftSideX + App.width / 2 &&
      x < this.background.rightSideX - App.width / 2
    ) {
      this.gamefield.pivot.x = this.playerShape.x;
    }
    if (
      y > this.background.upSideY + App.height / 2 &&
      y < this.background.downSideY - App.height / 2
    ) {
      this.gamefield.pivot.y = this.playerShape.y;
    }
    this.changeAnimation(keys);
  }

  private changeAnimation(keys: Keys): void {
    if (
      !keys.upIsPressed &&
      !keys.downIsPressed &&
      !keys.leftIsPressed &&
      !keys.rightIsPressed &&
      !this.isIdle()
    ) {
      this.setIdleAnimation();
    } else if (
      keys.upIsPressed &&
      keys.downIsPressed &&
      keys.leftIsPressed &&
      keys.rightIsPressed
    ) {
      if (!this.isIdle()) {
        this.setIdleAnimation();
      }
    } else if (keys.upIsPressed && keys.leftIsPressed && keys.rightIsPressed) {
      if (this.LastWasRight && !this.isRunRight()) {
        this.setRunRightAnimation();
      } else if (!this.LastWasRight && !this.isRunLeft()) {
        this.setRunLeftAnimation();
      }
    } else if (
      keys.downIsPressed &&
      keys.leftIsPressed &&
      keys.rightIsPressed
    ) {
      if (this.LastWasRight && !this.isRunRight()) {
        this.setRunRightAnimation();
      } else if (!this.LastWasRight && !this.isRunLeft()) {
        this.setRunLeftAnimation();
      }
    } else if (keys.upIsPressed && keys.downIsPressed) {
      if (keys.leftIsPressed && !this.isRunLeft()) {
        this.setRunLeftAnimation();
      } else if (keys.rightIsPressed && !this.isRunRight()) {
        this.setRunRightAnimation();
      } else if (
        !keys.leftIsPressed &&
        !keys.rightIsPressed &&
        !this.isIdle()
      ) {
        this.setIdleAnimation();
      }
    } else if (keys.upIsPressed) {
      if (
        (this.LastWasRight && !this.isRunRight()) ||
        (keys.rightIsPressed && !this.isRunRight())
      ) {
        this.setRunRightAnimation();
      } else if (
        (!this.LastWasRight && !this.isRunLeft()) ||
        (keys.leftIsPressed && !this.isRunLeft())
      ) {
        this.setRunLeftAnimation();
      }
    } else if (keys.downIsPressed) {
      if (
        (this.LastWasRight && !this.isRunRight()) ||
        (keys.rightIsPressed && !this.isRunRight())
      ) {
        this.setRunRightAnimation();
      } else if (
        (!this.LastWasRight && !this.isRunLeft()) ||
        (keys.leftIsPressed && !this.isRunLeft())
      ) {
        this.setRunLeftAnimation();
      }
    } else if (keys.leftIsPressed && keys.rightIsPressed) {
      if (!this.isIdle()) {
        this.setIdleAnimation();
      }
    } else if (keys.leftIsPressed && !this.isRunLeft()) {
      this.setRunLeftAnimation();
    } else if (keys.rightIsPressed && !this.isRunRight()) {
      this.setRunRightAnimation();
    }
  }

  private isRunLeft(): boolean {
    if (
      this.playerShape.textures == this.playerSpriteSheet.animations.RunLeft
    ) {
      return true;
    }
    return false;
  }

  private isRunRight(): boolean {
    if (
      this.playerShape.textures == this.playerSpriteSheet.animations.RunRight
    ) {
      return true;
    }
    return false;
  }

  private isIdle(): boolean {
    if (this.playerShape.textures == this.playerSpriteSheet.animations.Idle) {
      return true;
    }
    return false;
  }

  private setIdleAnimation(): void {
    this.playerShape.textures = this.playerSpriteSheet.animations.Idle;
    this.playerShape.play();
  }

  private setRunLeftAnimation(): void {
    this.LastWasRight = false;
    this.playerShape.textures = this.playerSpriteSheet.animations.RunLeft;
    this.playerShape.play();
  }

  private setRunRightAnimation(): void {
    this.LastWasRight = true;
    this.playerShape.textures = this.playerSpriteSheet.animations.RunRight;
    this.playerShape.play();
  }
}
