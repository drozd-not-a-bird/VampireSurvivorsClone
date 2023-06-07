import { SceneManager } from "./SceneManagment/SceneManager";
import { Container } from "pixi.js";
import { GameScene } from "./Scenes/Game/GameScene";
import { MenuModel } from "./Scenes/Menu/Models/MenuModel";
import { MenuController } from "./Scenes/Menu/Controllers/MenuController";
import { MenuView } from "./Scenes/Menu/Views/MenuView";
import { MenuScene } from "./Scenes/Menu/MenuScene";
import { ResourceManager } from "./ResourceManagment/ResourceManager";

export class Game {
  private static sceneManager: SceneManager;

  public constructor(root: Container) {
    Game.sceneManager = new SceneManager(root);
  }

  public start(): void {
    const resourceManager = ResourceManager.getInstance();
    resourceManager.loadTextures()
      .then(() => {
        console.log("Textures loaded successfully");
        Game.showMenuScene();
      })
      .catch((error) => {
        console.error("Error loading textures:", error);
      });
  }

  public static showGameScene(): void {
    this.sceneManager.show(new GameScene());
  }

  public static showMenuScene(): void {
    const menuModel = new MenuModel();
    const menuController = new MenuController(menuModel);
    const menuView = new MenuView(menuModel, menuController);
    this.sceneManager.show(new MenuScene(menuView));
  }
}
