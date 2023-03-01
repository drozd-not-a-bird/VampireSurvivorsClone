import { PlayerModel } from "./PlayerModel";

export class PlayerController {
  private playerModel: PlayerModel;

  constructor(playerModel: PlayerModel) {
    this.playerModel = playerModel;
  }
}
