import { TextStyle } from "pixi.js";
import { TimerTextStyle } from "../Style/TextStyle/TimerTextStyle";
import { Label } from "./Label";

export class TimerLabel extends Label {
  public constructor(text: string) {
    super(text);
    this.style = new TextStyle(new TimerTextStyle);
  }
}