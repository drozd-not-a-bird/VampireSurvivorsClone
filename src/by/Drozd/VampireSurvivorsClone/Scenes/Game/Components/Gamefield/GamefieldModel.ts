import { LevelConfig } from "../../Configs/LevelConfig";
import { Background } from "../Background/Background";
import { PlayerController } from "../Player/PlayerController";
import { PlayerModel } from "../Player/PlayerModel";
import { PlayerView } from "../Player/PlayerView";

export class GamefieldModel {
  public background: Background;
  public playerView: PlayerView

  public constructor(levelConfig: LevelConfig) {
    //this.addAssets();
    this.generateBackground(levelConfig);
    this.generatePlayer(levelConfig);
  }

  private generateBackground(levelConfig: LevelConfig): void {
    this.background = new Background(levelConfig.backgroundConfig);
  }

  private generatePlayer(levelConfig: LevelConfig): void {
    let playerModel = new PlayerModel(levelConfig.playerConfig);
    let playerController = new PlayerController(playerModel);
    this.playerView = new PlayerView(playerModel, playerController);
  }
}
