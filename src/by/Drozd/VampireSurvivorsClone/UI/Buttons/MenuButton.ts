import { MenuTextStyle } from "../Style/TextStyle/MenuTextStyle";
import { LabelButton } from "./LabelButton";

export class MenuButton extends LabelButton {
  constructor(label: string){
    super(label);
    this.setMenuTextStyle();
  }

  private setMenuTextStyle() {
    this.textElement.style = new MenuTextStyle();
  }
}