import { TextStyle } from "pixi.js";
import { WeaponNameTextStyle } from "../Style/TextStyle/WeaponNameTextStyle";
import { Label } from "./Label";

export class WeaponNameLabel extends Label {
  public constructor(text: string | number) {
    super(text);
    this.style = new TextStyle(new WeaponNameTextStyle);
  }
}