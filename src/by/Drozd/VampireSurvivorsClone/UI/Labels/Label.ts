import { Text, TextStyle } from "pixi.js";
import { DefaultTextStyle } from "../Style/TextStyle/DefaultTextStyle";

export class Label extends Text {
  public constructor(text: string | number) {
    if(typeof text == "number"){
      super(text.toString());
    }
    else{
      super(text);
    }
    this.style = new TextStyle(new DefaultTextStyle);
  }
}
