/**
 * makeRenderer.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
import PIXI from "pixi";
import config from "../config";

export default () => {
    const renderer = PIXI.autoDetectRenderer(config.gameDimensions.w, config.gameDimensions.h, {
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio,
        autoResize: true
    });

    renderer.view.style.position = "absolute";
    document.body.appendChild(renderer.view);
    return renderer;
};

