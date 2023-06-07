import { MiniSignal } from "mini-signals";

export class TimerModel {
  private static instance: TimerModel;
  private intervalId: number | undefined;
  private seconds: number;
  private minutes: number;
  private time: string;
  public timeIsChange: MiniSignal;
  public itsTimeForSpawn: MiniSignal;

  private constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.time = "00:00";
    this.timeIsChange = new MiniSignal<[string]>();
    this.itsTimeForSpawn = new MiniSignal<[number]>();
  }
  
  public static getInstance(): TimerModel {
    if (!TimerModel.instance) {
      TimerModel.instance = new TimerModel();
    }
    return TimerModel.instance;
  }

  public startTimer(): void {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.changeTime.bind(this), 1000);
    }
  }

  public stopTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  private changeTime(): void {
    if (this.seconds < 59) {
      this.seconds++;
    } else if (this.seconds >= 59) {
      this.seconds = 0;
      this.minutes++;
    }
    this.time = `${this.minutes < 10 ? "0" + this.minutes : this.minutes}:${
      this.seconds < 10 ? "0" + this.seconds : this.seconds
    }`;
    this.timeIsChange.dispatch(this.time);
    this.itsTimeForSpawn.dispatch(this.minutes);
  }
}
