import { UIComponent } from "../../../UI/UIComponents";
import { App } from "../../../../../../Application";
import { MenuController } from "../Controllers/MenuController";
import { MenuViewModel } from "../Resources/MenuViewModel";
import { Sprite } from "pixi.js";
import { MenuButton } from "../../../UI/Buttons/MenuButton";

export class MenuView extends UIComponent {
  private menuViewModel: MenuViewModel;
  private menuController: MenuController;

  public constructor(menuController: MenuController, menuViewModel: MenuViewModel) {
    super();
    this.menuController = menuController;
    this.menuViewModel = menuViewModel;
    this.setBackgroundImage();
    this.setButtons();
  }

  private setBackgroundImage(): void {
    const backgroundImage: UIComponent = Sprite.from(
      this.menuViewModel.backgroundImage
    );
    backgroundImage.width = App.width;
    backgroundImage.height = App.height;
    this.addChild(backgroundImage);
  }

  private setButtons(): void {
    this.setPlayButton();
  }

  private setPlayButton(): void {
    const buttonPlay = new MenuButton("Play");
    buttonPlay.on("click", this.menuController.GameStartButtonIsPressed);
    buttonPlay.x = (App.width / 2) - (buttonPlay.getWidth() / 2);
    buttonPlay.y = (App.height / 2) - (buttonPlay.getHeight() / 2);
    this.addChild(buttonPlay);
  }
}
