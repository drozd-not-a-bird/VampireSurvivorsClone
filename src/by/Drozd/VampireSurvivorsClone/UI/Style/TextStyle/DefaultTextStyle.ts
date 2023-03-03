import { TextStyle } from "pixi.js";

export class DefaultTextStyle extends TextStyle {
  public constructor() {
    super();
    this.fontFamily = "Palatino Linotype";
    this.fontSize = 80;
    this.fontStyle = "italic";
    this.fontWeight = "bold";
    this.fill = ["#E0E0E0"]; // gradient ['#ffffff'; '#00ff99']
    this.stroke = "#4a1850";
    this.strokeThickness = 5;
    this.dropShadow = false;
    this.dropShadowColor = "#000000";
    this.dropShadowBlur = 4;
    this.dropShadowAngle = Math.PI / 6;
    this.dropShadowDistance = 6;
    this.wordWrap = false;
    this.wordWrapWidth = 440;
    this.lineJoin = "round";
  }
}
