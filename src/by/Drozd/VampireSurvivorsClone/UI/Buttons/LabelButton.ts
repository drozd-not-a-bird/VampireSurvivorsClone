import { DefaultTextStyle } from "../Style/TextStyle/DefaultTextStyle";
import { Button } from "./Button";

export class LabelButton extends Button {
  protected textWidth: number;
  protected textHeight: number;
  protected textElement: PIXI.Text;

  public constructor(label: string) {
    super();
    this.setLabel(label);
  }

  private setLabel(label: string): void {
    const style = new DefaultTextStyle();
    let textElement = new PIXI.Text(label, style);
    this.addChild(textElement);
    this.textWidth = textElement.width;
    this.textHeight = textElement.height;
    this.textElement = textElement;
  }

  public getWidth(): number {
    return this.textWidth;
  }

  public getHeight(): number {
    return this.textHeight;
  }
}
