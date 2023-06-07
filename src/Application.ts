import { Game } from "./by/Drozd/VampireSurvivorsClone/Game";

export class App extends PIXI.Application {
  public static readonly width = 1920;
  public static readonly height = 1080;
  public static readonly resolution = 1;

  public constructor() {
    super({
      width: App.width,
      height: App.height,
      resolution: App.resolution,
    });
    document.body.appendChild(this.view);
    this.startGame();
  }

  private startGame(): void {
    const game = new Game(this.stage);
    game.start();
  }
}
