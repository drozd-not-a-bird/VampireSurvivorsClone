import { App } from "./Application";

const app = new App();
(window as any).__PIXI_APP__ = app;
console.log("пасаси");
