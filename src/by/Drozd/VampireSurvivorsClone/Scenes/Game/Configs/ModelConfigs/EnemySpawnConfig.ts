import { EnemysForEveryMinutes } from "../../../../Configs/Spawn/spawnRules.json";

export class EnemySpawnConfig {
  public readonly enemysForSpawn: string[][];

  public constructor() {
    this.enemysForSpawn = [];
    this.initEnemysForSpawn();
  }

  private initEnemysForSpawn(): void {
    for (let i = 0; i < EnemysForEveryMinutes.length; i++) {
      for (let j = 0; j < EnemysForEveryMinutes[i].length; j++) {
        this.enemysForSpawn.push(EnemysForEveryMinutes[i]);
      }
    }
  }
}
