/**
 * vector-to-angle.js
 *
 * @see http://stackoverflow.com/questions/6247153/angle-from-2d-unit-vector
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */

const Vector = require("./math/Vector");

const v = new Vector(100, -100);

function printAngle(v) {
    console.log("(" + v.x + ", " + v.y + ") => " + v.angle)
}

[
    new Vector(0, -1),
    new Vector(1, 1),
    new Vector(1, 0),
    new Vector(1, -1),
    new Vector(0, -1),
    new Vector(-1, -1),
    new Vector(-1, 0),
    new Vector(-1, 1),
].forEach(printAngle);
