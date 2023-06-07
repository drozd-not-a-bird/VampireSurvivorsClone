import { TextStyle } from "pixi.js";
import { WeaponSectionTextStyle } from "../Style/TextStyle/WeaponSectionTextStyle";
import { Label } from "./Label";

export class SectionLabel extends Label {
  public constructor(text: string) {
    super(text);
    this.style = new TextStyle(new WeaponSectionTextStyle);
  }
}