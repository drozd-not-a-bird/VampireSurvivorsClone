import { MenuTextStyle } from "../Style/TextStyle/MenuTextStyle";
import { LabelButton } from "./LabelButton";

export class MenuButton extends LabelButton {
  public constructor(label: string) {
    super(label);
    this.setMenuTextStyle();
  }

  private setMenuTextStyle(): void {
    this.textElement.style = new MenuTextStyle();
    this.textWidth = this.textElement.width;
    this.textHeight = this.textElement.height;
  }
}
