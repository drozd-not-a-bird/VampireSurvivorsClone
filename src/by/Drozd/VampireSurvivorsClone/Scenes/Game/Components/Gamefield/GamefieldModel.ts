import { LevelConfig } from "../../Configs/LevelConfig";
import { Background } from "../Background/Background";
import { Player } from "../Player/Player";
import { Warrior } from "../Player/Warrior";

export class GamefieldModel {
  public player: Player;
  public background: Background;
  public constructor(levelConfig: LevelConfig) {
    this.background = new Background(levelConfig.backgroundConfig);
    this.player = new Warrior(levelConfig.playerConfig);
  }
}
