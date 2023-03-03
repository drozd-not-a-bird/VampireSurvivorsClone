import { SceneManager } from "./SceneManagment/SceneManager";
import { Container } from "pixi.js";
import { GameScene } from "./Scenes/Game/GameScene";
import { LevelConfig } from "./Scenes/Game/Configs/LevelConfig";
import { GamefieldModel } from "./Scenes/Game/Components/Gamefield/GamefieldModel";
import { GamefieldController } from "./Scenes/Game/Components/Gamefield/GamefieldController";
import { GamefieldView } from "./Scenes/Game/Components/Gamefield/GamefieldView";
import { MenuModel } from "./Scenes/Menu/Models/MenuModel";
import { MenuController } from "./Scenes/Menu/Controllers/MenuController";
import { MenuView } from "./Scenes/Menu/Views/MenuView";
import { MenuScene } from "./Scenes/Menu/MenuScene";
import { MenuViewModel } from "./Scenes/Menu/Resources/MenuViewModel";

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
    const menuModel = new MenuModel();
    const menuController = new MenuController(menuModel);
    const menuViewModel = new MenuViewModel();
    const menuView = new MenuView(menuController, menuViewModel);
    this.sceneManager.show(new MenuScene(menuView));
  }
}
