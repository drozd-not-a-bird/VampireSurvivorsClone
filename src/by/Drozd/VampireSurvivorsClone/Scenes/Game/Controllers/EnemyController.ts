import { Ticker } from "pixi.js";
import { EnemyModel } from "../Models/EnemyModel";

export class EnemyController {
  private enemyModel: EnemyModel;
  
  public constructor(enemyModel: EnemyModel) {
    this.enemyModel = enemyModel;
    this.addTicker();
  }

  private addTicker() {
    const ticker = Ticker.shared;
    const enemyMoveFunc = this.enemyMove.bind(this);
    ticker.add(enemyMoveFunc);
  }

  private enemyMove() {
    this.enemyModel.move();
  }
}