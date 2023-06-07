import { Ticker } from "pixi.js";
import { App } from "../../../../../../Application";
import { HealthBarLabel } from "../../../UI/Labels/HealthBarLabel";
import { Label } from "../../../UI/Labels/Label";
import { View } from "../../../UI/View";
import { HealthBarController } from "../Controllers/HealthBarController";
import { Gamefield } from "../Gamefield";
import { HealthBarModel } from "../Models/HealthBarModel";

export class HealthBarView extends View {
  private healthBarModel: HealthBarModel;
  private healthBarController: HealthBarController;
  private playerMaxHealth: number;
  private barWidth: number;
  private barHeight: number;
  private barColor: number;
  private graphics: PIXI.Graphics;
  private gamefield: Gamefield;
  private label: HealthBarLabel;

  public constructor(
    healthBarModel: HealthBarModel,
    healthBarController: HealthBarController
  ) {
    super();
    this.healthBarModel = healthBarModel;
    this.healthBarController = healthBarController;
    this.playerMaxHealth = healthBarModel.playerMaxHealth;
    this.barWidth = 500;
    this.barHeight = 50;
    this.barColor = 0xff0000; // Red color
    this.gamefield = Gamefield.getInstance();
    this.graphics = new PIXI.Graphics();
    this.addChild(this.graphics);
    this.drawDefaultHealth();
    this.setLabel();
    this.connectToModel();
    this.createTicker();
  }

  private setLabel(): void {
    const label = new Label(
      "Health: " + this.playerMaxHealth + " / " + this.playerMaxHealth
    );
    label.x = 10;
    label.y = this.height / 2 - label.height / 2;
    this.label = label;
    this.addChild(label);
  }

  private drawDefaultHealth(): void {
    // Draw background
    this.graphics.beginFill(0x000000);
    this.graphics.drawRect(0, 0, this.barWidth, this.barHeight);
    this.graphics.endFill();

    // Draw the border around the rectangle
    this.graphics.beginFill();
    // Set the border properties
    this.graphics.lineStyle(2, 0x000000, 1); // Thickness: 2, Color: Black, Alpha: 1
    this.graphics.drawRect(0, 0, this.barWidth, this.barHeight);
    this.graphics.endFill();

    // Draw health value
    this.graphics.beginFill(this.barColor);
    this.graphics.drawRect(0, 0, this.barWidth, this.barHeight);
    this.graphics.endFill();
  }

  private connectToModel(): void {
    this.healthBarModel.healthIsChanged.add(this.healthIsUpdated.bind(this));
  }

  private healthIsUpdated(health: number): void {
    this.graphics.clear();

    // Draw background
    this.graphics.beginFill(0x000000);
    this.graphics.drawRect(0, 0, this.barWidth, this.barHeight);
    this.graphics.endFill();

    // Draw the border around the rectangle
    this.graphics.beginFill();
    // Set the border properties
    this.graphics.lineStyle(2, 0x000000, 1); // Thickness: 2, Color: Black, Alpha: 1
    this.graphics.drawRect(0, 0, this.barWidth, this.barHeight);
    this.graphics.endFill();

    // Draw health value
    const healthRatio = health / this.playerMaxHealth;
    const barWidth = this.barWidth * healthRatio;
    this.graphics.beginFill(this.barColor);
    this.graphics.drawRect(0, 0, barWidth, this.barHeight);
    this.graphics.endFill();
    this.label.text =
      "Health: " + this.playerMaxHealth + " / " + this.playerMaxHealth;
  }

  private createTicker(): void {
    const ticker = Ticker.shared;
    ticker.add(this.holdLabel.bind(this));
  }

  private holdLabel(): void {
    this.x = this.gamefield.pivot.x - App.width / 2;
    this.y = this.gamefield.pivot.y + App.height / 2 - this.height;
  }
}
