import { SceneManager } from "../../../SceneManagment/SceneManager";
import { Container } from "pixi.js";
import { GameScene } from "./Scenes/Game/GameScene";
import { LevelConfig } from "./Scenes/Game/Configs/LevelConfig";
import { GamefieldModel } from "./Scenes/Game/Components/Gamefield/GamefieldModel";
import { GamefieldController } from "./Scenes/Game/Components/Gamefield/GamefieldController";
import { GamefieldView } from "./Scenes/Game/Components/Gamefield/GamefieldView";
import { MenuConfig } from "./Scenes/Menu/Configs/MenuConfig";
import { MenuModel } from "./Scenes/Menu/components/Menu/MenuModel";
import { MenuController } from "./Scenes/Menu/components/Menu/MenuController";
import { MenuView } from "./Scenes/Menu/components/Menu/MenuView";
import { MenuScene } from "./Scenes/Menu/MenuScene";

export class Game {
  private static sceneManager: SceneManager;

  public constructor(root: Container) {
    Game.sceneManager = new SceneManager(root);
  }

  public start(): void {
    Game.showMenuScene();
  }

  public static showGameScene(): void {
    const levelConfig = new LevelConfig();
    const gamefieldModel = new GamefieldModel(levelConfig);
    const gamefieldController = new GamefieldController(gamefieldModel);
    const gamefieldView = new GamefieldView(
      gamefieldModel,
      gamefieldController
    );
    this.sceneManager.show(new GameScene(gamefieldView));
  }

  public static showMenuScene(): void {
    const menuConfig = new MenuConfig();
    const menuModel = new MenuModel(menuConfig);
    const menuController = new MenuController(menuModel);
    const menuView = new MenuView(
      menuModel,
      menuController
    );
    this.sceneManager.show(new MenuScene(menuView));
  }
}
