import { Loader, Spritesheet, Texture } from "pixi.js";
import { ResourcesURL } from "./ResourcesURL";

export class ResourceManager {
  private static instance: ResourceManager;
  private resources: { [key: string]: PIXI.LoaderResource };

  private constructor() {
    this.resources = {};
  }

  public static getInstance(): ResourceManager {
    if (!ResourceManager.instance) {
      ResourceManager.instance = new ResourceManager();
    }
    return ResourceManager.instance;
  }

  public loadTextures(): Promise<void> {
    const loader = new Loader();
    const keys = Object.keys(ResourcesURL.resources);
  
    keys.forEach((key) => {
      loader.add(key, ResourcesURL.resources[key]);
    });
  
    return new Promise<void>((resolve, reject) => {
      loader.load((_, resources) => {
        keys.forEach((key) => {
          this.resources[key] = resources[key];
        });
        resolve();
      });
  
      loader.onError.once((error) => {
        reject(error);
      });
    });
  }

  public getTexture(objectName: string): Texture {
    const resource = this.resources[objectName];
    if (resource && resource.texture) {
      return resource.texture;
    }
    throw new Error(`Texture '${objectName}' not found.`);
  }

  public getSpritesheet(objectName: string): Spritesheet {
    const resource = this.resources[objectName];
    if (resource && resource.spritesheet) {
      return resource.spritesheet;
    }
    throw new Error(`Spritesheet '${objectName}' not found.`);
  }
}
