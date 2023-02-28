import { Scene } from "../../../../../SceneManagment/Scene";
import { MenuView } from "./components/Menu/MenuView";

export class MenuScene extends Scene {
  constructor(menuView: MenuView) {
    super();
    this.addChild(menuView);
  }
}
