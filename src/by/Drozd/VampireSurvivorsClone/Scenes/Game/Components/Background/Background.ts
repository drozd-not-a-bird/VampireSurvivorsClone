import { UIComponent } from "../../../../UI/UIComponents";
import { BackgroundConfig } from "../../Configs/BackgroundConfig";

export class Background extends UIComponent {
  private backgroundConfig: BackgroundConfig;
  constructor(backgroundConfig: BackgroundConfig) {
    super();
    this.backgroundConfig = backgroundConfig;
    this.generateBackgroundField();
    console.log("Background was created!");
    //this.addChild(backgroundConfig.textureForBackground);
  }

  private generateBackgroundField() {
    let stepsInWidth = this.backgroundConfig.stepsInWidth;
    let stepsInHeight = this.backgroundConfig.stepsInHeight;
    let textureScale = this.backgroundConfig.textureScale;
    let textureHeight = this.backgroundConfig.textureHeight;
    let textureWidth = this.backgroundConfig.textureWidth;
    for (let i = 0; i < stepsInWidth; i++) {
      for (let j = 0; j < stepsInHeight; j++) {
        let tile = PIXI.Sprite.from(this.backgroundConfig.textureForBackground);
        tile.scale.x = textureScale;
        tile.scale.y = textureScale;
        tile.x = i * textureWidth * textureScale;
        tile.y = j * textureHeight * textureScale;
        this.addChild(tile);
      }
    }
  }
}
