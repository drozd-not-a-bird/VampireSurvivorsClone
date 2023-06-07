import { Rectangle, Ticker } from "pixi.js";
import { EnemyView } from "../../Views/EnemyView";
import { PlayerView } from "../../Views/PlayerView";
import { EnemySpawner } from "../Enemy/EnemySpawner";

export class CollisionDetector {
  private static instance: CollisionDetector;
  private playerView: PlayerView;
  private enemiesView: EnemyView[];

  private constructor() {
    this.playerView = PlayerView.getInstance();
    this.enemiesView = [];
    this.connectToEnemySpawner();
    this.addTicker();
  }

  public static getInstance(): CollisionDetector {
    if (!CollisionDetector.instance) {
      CollisionDetector.instance = new CollisionDetector();
    }
    return CollisionDetector.instance;
  }

  private connectToEnemySpawner(): void {
    const enemySpawner = EnemySpawner.getInstance();
    enemySpawner.enemyWasCreated.add(this.addEnemy.bind(this));
  }

  private addEnemy(enemy: EnemyView): void {
    this.enemiesView.push(enemy);
  }

  private addTicker() {
    const ticker = Ticker.shared;
    ticker.add(this.checkPlayerCollisionWithEnemies.bind(this));
  }

  private checkPlayerCollisionWithEnemies() {
    this.enemiesView.forEach((enemy) => {
      if (this.checkCollision(this.playerView.getBounds(), enemy.getBounds())) {
        console.log("player стукнулся");
      }
    });
  }

  private checkCollision(player: Rectangle, enemy: Rectangle): boolean {
    return (
      player.x < enemy.x + enemy.width &&
      player.x + player.width > enemy.x &&
      player.y < enemy.y + enemy.height &&
      player.y + player.height > enemy.y
    );
  }
}
