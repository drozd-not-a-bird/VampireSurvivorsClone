import { Container } from "pixi.js";
import { Scene } from "./Scene";

export class SceneManager {
  private root: Container;
  private currentScene: Scene;

  public constructor(root: Container) {
    this.root = root;
  }

  public show(scene: Scene) {
    if (this.currentScene !== undefined) {
      this.onloadCurrentScene();
    }
    this.root.addChild(scene);
    this.currentScene = scene;
  }

  private onloadCurrentScene() {
    this.root.removeChild(this.currentScene);
  }
}
