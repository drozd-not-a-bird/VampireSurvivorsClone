import { Scene } from "../../SceneManagment/Scene";
import { GamefieldView } from "./Components/Gamefield/GamefieldView";

export class GameScene extends Scene {
  constructor(gamefieldView: GamefieldView) {
    super();
    this.addChild(gamefieldView);
  }
}
