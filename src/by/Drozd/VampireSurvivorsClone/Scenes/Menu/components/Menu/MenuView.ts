import { UIComponent } from "../../../../UI/UIComponents";
import { App } from "../../../../../../../Application";
import { MenuModel } from "./MenuModel";
import { MenuController } from "./MenuController";
import { Button } from "../../../../UI/Button";
import { Game } from "../../../../Game";

export class MenuView extends UIComponent {
  private menuModel: MenuModel;
  private menuController: MenuController;

  public constructor(menuModel: MenuModel, menuController: MenuController) {
    super();
    this.menuModel = menuModel;
    this.menuController = menuController;
    this.setBackgroundImage();
    this.setButtons();
  }

  private setBackgroundImage(): void {
    let backgroundImage: UIComponent = PIXI.Sprite.from(
      this.menuModel.getBackgroundImage()
    );
    backgroundImage.width = App.width;
    backgroundImage.height = App.height;
    this.addChild(backgroundImage);
  }

  private setButtons(): void {
    let button = new Button("Play", this.startGameScene);
    console.log(button.width);
    console.log(button.height);
    button.x = (App.width / 2) - (button.getWidth() / 2);
    button.y = (App.height / 2) - (button.getHeight() / 2);
    this.addChild(button);
  }

  private startGameScene(): void {
    Game.showGameScene();
  }
}
