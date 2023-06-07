import { Scene } from "../../SceneManagment/Scene";
import { Gamefield } from "./Gamefield";

export class GameScene extends Scene {
  constructor() {
    super();
    this.addGamefield();
  }

  private addGamefield() {
    const gamefield = Gamefield.getInstance();
    this.addChild(gamefield);
    gamefield.startGame();
  }
}
