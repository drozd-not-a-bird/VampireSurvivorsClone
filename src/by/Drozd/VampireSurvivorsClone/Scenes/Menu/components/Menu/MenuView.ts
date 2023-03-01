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
    const backgroundImage: UIComponent = PIXI.Sprite.from(
      this.menuModel.getBackgroundImage()
    );
    backgroundImage.width = App.width;
    backgroundImage.height = App.height;
    this.addChild(backgroundImage);
  }

  private setButtons(): void {
    this.setButtonPlay();
  }

  private setButtonPlay(): void {
    const buttonPlay = new Button("Play", this.GameStartButtonIsPressed);
    buttonPlay.x = (App.width / 2) - (buttonPlay.getWidth() / 2);
    buttonPlay.y = (App.height / 2) - (buttonPlay.getHeight() / 2);
    this.addChild(buttonPlay);
  }

  private GameStartButtonIsPressed(): void {
    this.menuController.GameStartButtonIsPressed();
  }
}
