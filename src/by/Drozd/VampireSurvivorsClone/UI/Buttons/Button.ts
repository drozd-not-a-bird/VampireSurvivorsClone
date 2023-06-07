import { Texture } from "pixi.js";
import { UIComponent } from "../UIComponents";

export class Button extends UIComponent {
  public isActive: boolean;

  public constructor(texture?: Texture) {
    super(texture);
    this.isActive = true;
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

  public makeInactive(): void {
    this.removeListener("pointerdown", this.onButtonDown)
      .removeListener("pointerover", this.onButtonOver)
      .removeListener("pointerout", this.onButtonOut);
    this.buttonMode = false;
    this.interactive = false;
    this.alpha = 0.5;
  }

  public makeActive(): void {
    this.setHoverEvents();
    this.buttonMode = true;
    this.interactive = true;
    this.alpha = 1;
  }
}
