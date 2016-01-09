/**
 * makeStage.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
import PIXI from "pixi";
import config from "../config";

export default () => {
    const stage = new PIXI.Container();
    stage.hitArea = new PIXI.Rectangle(0, 0, config.gameDimensions.w, config.gameDimensions.w);
    return stage;
};


