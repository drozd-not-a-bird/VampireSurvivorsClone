import { UIComponent } from "../UIComponents";

export class Button extends UIComponent {

  constructor() {
    super();
    this.buttonMode = true;
    this.interactive = true;
    this.setHoverEvents();
  }

  private setHoverEvents(): void {
    this.on("pointerdown", this.onButtonDown)
    .on("pointerover", this.onButtonOver)
    .on("pointerout", this.onButtonOut);
  }

  private onButtonDown() {
    this.alpha = 0.5;
  }

  private onButtonOver() {
    this.alpha = 0.75;
  }

  private onButtonOut() {
    this.alpha = 1;
  }
}
