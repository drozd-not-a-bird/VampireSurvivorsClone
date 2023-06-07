import { UIComponent } from "../../../UI/UIComponents";
import { App } from "../../../../../../Application";
import { MenuController } from "../Controllers/MenuController";
import { MenuButton } from "../../../UI/Buttons/MenuButton";
import { View } from "../../../UI/View";
import { MenuModel } from "../Models/MenuModel";
import { WeaponSelectionMenu } from "../Components/WeaponSelectionMenu";
import { ResourceManager } from "../../../ResourceManagment/ResourceManager";

export class MenuView extends View {
  private menuModel: MenuModel;
  private menuController: MenuController;
  private buttonPlay: MenuButton;
  private buttonStartGame: MenuButton;

  public constructor(menuModel: MenuModel, menuController: MenuController) {
    super();
    this.menuController = menuController;
    this.menuModel = menuModel;
    this.subscribeToModel();
    this.setBackgroundImage();
    this.setPlayButton();
  }

  private subscribeToModel(): void {
    this.menuModel.PlayButtonPressed.add(this.showWeaponSelection.bind(this));
  }

  private setBackgroundImage(): void {
    const resourceManager = ResourceManager.getInstance();
    const backgroundImage: UIComponent = new UIComponent(
      resourceManager.getTexture("menuBackground")
    );
    backgroundImage.width = App.width;
    backgroundImage.height = App.height;
    this.addChild(backgroundImage);
  }

  private setPlayButton(): void {
    const buttonPlay = new MenuButton("Play");
    buttonPlay.on("click", this.menuController.ButtonPlayIsPressed);
    buttonPlay.x = App.width / 2 - buttonPlay.getWidth() / 2;
    buttonPlay.y = App.height / 2 - buttonPlay.getHeight() / 2;
    this.buttonPlay = buttonPlay;
    this.addChild(buttonPlay);
  }

  private showWeaponSelection(): void {
    this.removePlayButton();
    this.setWeaponSelectionMenu();
    this.setGameStartButton();
  }

  private removePlayButton(): void {
    this.removeChild(this.buttonPlay);
  }

  private setWeaponSelectionMenu(): void {
    const weaponSelectionMenu = new WeaponSelectionMenu();
    weaponSelectionMenu.isReady.add(this.selectionMenuIsChanged.bind(this));
    this.addChild(weaponSelectionMenu);
  }

  private selectionMenuIsChanged(ready: boolean): void {
    if (ready) {
      this.buttonStartGame.makeActive();
    } else {
      this.buttonStartGame.makeInactive();
    }
  }

  private setGameStartButton(): void {
    const buttonStartGame = new MenuButton("Start Game");
    buttonStartGame.makeInactive();
    buttonStartGame.on("click", this.menuController.ButtonStartGameIsPressed);
    buttonStartGame.x = App.width / 2 - buttonStartGame.getWidth() / 2;
    buttonStartGame.y = (App.height / 10) * 9 - buttonStartGame.getHeight() / 2;
    this.buttonStartGame = buttonStartGame;
    this.addChild(buttonStartGame);
  }
}
