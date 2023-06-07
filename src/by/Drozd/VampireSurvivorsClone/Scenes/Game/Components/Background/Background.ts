import { UIComponent } from "../../../../UI/UIComponents";
import { BackgroundConfig } from "../../Configs/ViewConfigs/BackgroundConfig";

export class Background extends UIComponent {
  private static instance: Background;
  private backgroundConfig: BackgroundConfig;
  private fullWidth: number;
  private fullHeight: number;

    // coordinates of the sides
    public leftSideX: number;
    public rightSideX: number;
    public upSideY: number;
    public downSideY: number;

  private constructor(backgroundConfig: BackgroundConfig) {
    super();
    this.backgroundConfig = backgroundConfig;
    this.generateBackgroundField();
  }

  public static getInstance(backgroundConfig?: BackgroundConfig): Background {
    if (!Background.instance && backgroundConfig) {
      Background.instance = new Background(backgroundConfig);
    }
    else if(!Background.instance && !backgroundConfig) {
      throw new Error("There is not BackgroundConfig for Background instance");
    }
    return Background.instance;
  }

  private generateBackgroundField() {
    let stepsInWidth = this.backgroundConfig.stepsInWidth;
    let stepsInHeight = this.backgroundConfig.stepsInHeight;
    let textureScale = this.backgroundConfig.textureScale;
    let textureHeight = this.backgroundConfig.textureHeight;
    let textureWidth = this.backgroundConfig.textureWidth;
    for (let i = 0; i < stepsInWidth; i++) {
      for (let j = 0; j < stepsInHeight; j++) {
        let tile = new UIComponent(this.backgroundConfig.backgroundTileTexture);
        tile.scale.x = textureScale;
        tile.scale.y = textureScale;
        tile.x = i * textureWidth * textureScale;
        tile.y = j * textureHeight * textureScale;
        this.addChild(tile);
      }
    }
    this.fullWidth = textureWidth * textureScale * stepsInWidth;
    this.fullHeight = textureHeight * textureScale * stepsInHeight;
  }

  public generateCoordinatesOfTheSides(): void {
    this.leftSideX = -(this.fullWidth / 2);
    this.rightSideX = +(this.fullWidth / 2);
    this.upSideY = -(this.fullHeight / 2);
    this.downSideY = +(this.fullHeight / 2);
  }

  public getWidth(): number {
    return this.fullWidth;
  }

  public getHeight(): number {
    return this.fullHeight;
  }
}
