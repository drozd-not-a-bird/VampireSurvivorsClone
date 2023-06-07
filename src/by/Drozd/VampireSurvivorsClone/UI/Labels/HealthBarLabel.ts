import { TextStyle } from "pixi.js";
import { HealthBarTextStyle } from "../Style/TextStyle/HealthBarTextStyle";
import { Label } from "./Label";

export class HealthBarLabel extends Label {
  public constructor(text: string) {
    super(text);
    this.style = new TextStyle(new HealthBarTextStyle);
  }
}