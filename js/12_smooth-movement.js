/**
 * Video 12: Smooth Move(ment) – Linear Interpolation
 *
 * https://www.youtube.com/watch?v=qJq7I2DLGzI
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
import keyboard from "./game/keyboard";

const renderer = makeRenderer(),
    stage = makeStage();

resizeManager.init({ stage, renderer });

const mario = {
    position: new Point(config.gameDimensions.w / 2, config.gameDimensions.h / 2),
    velocity: new Vector(0, 0),
    velocityGoal: new Vector(0, 0)
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
    mario.velocity = new Vector(
        approach(mario.velocityGoal.x, mario.velocity.x, dt * config.lerpSpeed),
        approach(mario.velocityGoal.y, mario.velocity.y, dt * config.lerpSpeed)
    );

    mario.position = mario.position.addVector(mario.velocity.multiply(dt));
}

function approach(goal, current, dt) {
    const difference = goal - current;
    if (difference > dt) {
        return current + dt;
    }
    if (difference < -dt) {
        return current - dt;
    }
    return goal;
}

function draw() {
    marioSprite.position = {
        x: mario.position.x,
        y: mario.position.y
    };
}

let previousTime = 0,
    currentTime = getCurrentTime();

const keys = {
    up: keyboard(38),
    right: keyboard(39),
    down: keyboard(40),
    left: keyboard(37)
};

function stop() {
    mario.velocityGoal = new Vector(0, 0);
}

function move(x, y) {
    mario.velocityGoal = new Vector(x, y);
}

keys.up.press = () => move(0, -100);
keys.up.release = stop;

keys.down.press = () => move(0, 100);
keys.down.release = stop;

keys.left.press = () => move(-100, 0);
keys.left.release = stop;

keys.right.press = () => move(100, 0);
keys.right.release = stop;

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

