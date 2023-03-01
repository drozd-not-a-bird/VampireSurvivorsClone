import { UIComponent } from "./UIComponents";

export class Button extends UIComponent {
  public label: string;
  private textWidth: number;
  private textHeight: number;

  constructor(
    label: string,
    onClickFuncktion: Function,
  ) {
    super();
    this.buttonMode = true;
    this.interactive = true;
    this.on("pointerdown", this.onButtonDown)
      .on("pointerup", onClickFuncktion)
      .on("pointerupoutside", onClickFuncktion)
      .on("pointerover", this.onButtonOver)
      .on("pointerout", this.onButtonOut);
    this.setLabel(label);
  }

  private onButtonDown() {
    this.alpha = 0.5;
  }

  //private onButtonUp() {}

  private onButtonOver() {
    this.alpha = 0.75;
  }

  private onButtonOut() {
    this.alpha = 1;
  }

  private setLabel(label: string): void {
    this.label = label;
    const style = new PIXI.TextStyle({
      fontFamily: "Palatino Linotype",
      fontSize: 80,
      fontStyle: "italic",
      fontWeight: "bold",
      fill: ["#E0E0E0"], // gradient ['#ffffff', '#00ff99']
      stroke: "#4a1850",
      strokeThickness: 5,
      dropShadow: false,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: false,
      wordWrapWidth: 440,
      lineJoin: "round",
    });
    let text = new PIXI.Text(label, style);
    this.addChild(text);
    this.textWidth = text.width;
    this.textHeight = text.height;
  }

  public getWidth(): number {
    return this.textWidth;
  }

  public getHeight(): number {
    return this.textHeight;
  }
}
