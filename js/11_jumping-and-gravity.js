/**
 * Video 11: Jumping and Gravity
 *
 * https://www.youtube.com/watch?v=c4b9lCfSDQM
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
import makeRenderer from "./setup/makeRenderer";
import makeStage from "./setup/makeStage";
import resizeManager from "./game/resizeManager";
import Vector from "./math/Vector";
import Point from "./math/Point";
import config from "./config";

const renderer = makeRenderer(),
    stage = makeStage();

resizeManager.init({ stage, renderer });

const mario = {
    position: new Point(config.margin * 2, config.gameDimensions.h - config.margin * 2),
    velocity: new Vector(30, -20),
    gravity: new Vector(0, 20)
};

const marioSprite = new PIXI.Sprite.fromImage("./images/mario.png");
marioSprite.position = {
    x: mario.position.x,
    y: mario.position.y
};
marioSprite.anchor = {
    x: 0.5,
    y: 0.5
};
stage.addChild(marioSprite);

function getCurrentTime() {
    return Date.now();
}

function update(dt) {
    mario.position = mario.position.addVector(mario.velocity.multiply(dt));
    mario.velocity = mario.velocity.add(mario.gravity.multiply(dt));

    keepMarioWithinBorders();
}

function keepMarioWithinBorders() {
    if (mario.position.x >= config.gameDimensions.w - config.margin || mario.position.x <= config.margin) {
        mario.velocity.x *= -1
    }
    if (mario.position.y >= config.gameDimensions.h - config.margin || mario.position.y <= config.margin) {
        mario.velocity.y *= -1
    }
}

function draw() {
    marioSprite.position = {
        x: mario.position.x,
        y: mario.position.y
    };
}

let previousTime = 0,
    currentTime = getCurrentTime();

// game loop
(function animate() {
    requestAnimationFrame(animate);

    previousTime = currentTime;
    currentTime = getCurrentTime();

    let dt = currentTime - previousTime;

    if (dt > 0.15) {
        dt = 0.15;
    }

    update(dt);
    draw();

    renderer.render(stage);
}());

