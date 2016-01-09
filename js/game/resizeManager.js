/**
 * resizeManager.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 29 Dec 2015
 */
import config from "../config";

let initialized = false,
    stage = null,
    renderer = null;

function resize() {

    // Determine which screen dimension is most constrained
    const ratio = Math.min(
        window.innerWidth / config.gameDimensions.w,
        window.innerHeight / config.gameDimensions.h
    );

    // Scale the view appropriately to fill that dimension
    stage.scale.x = ratio;
    stage.scale.y = ratio;

    // Update the renderer dimensions
    const rendererDimensions = {
        w: Math.ceil(config.gameDimensions.w * ratio),
        h: Math.ceil(config.gameDimensions.h * ratio)
    };

    renderer.resize(
        rendererDimensions.w,
        rendererDimensions.h
    );

    renderer.view.style.left = ((window.innerWidth - rendererDimensions.w) / 2) + "px";
    renderer.view.style.top = ((window.innerHeight - rendererDimensions.h) / 2) + "px";
}

function init(deps) {
    if (initialized) {
        throw new Error("resize is already initialized");
    }
    stage = deps.stage;
    renderer = deps.renderer;

    window.addEventListener("resize", resize);
    resize();
    initialized = true;
}

export default {
    init
};


