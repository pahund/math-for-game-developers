/**
 * vector-to-angle.js
 *
 * @see http://stackoverflow.com/questions/6247153/angle-from-2d-unit-vector
 * @see
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 13 Jan 2016
 */

const Vector = require("./math/Vector");

const v = new Vector(100, -100);

function printDeg(v) {
    console.log("(" + v.x + ", " + v.y + ") => " + v.deg);
}

function printRad(v) {
    console.log("(" + v.x + ", " + v.y + ") => " + v.rad);
}

function printVector(deg) {
    const v = Vector.fromDeg(deg);
    console.log(deg + " => (" + v.x + ", " + v.y + ")");
}

[
    new Vector(0, -1), // 0 degrees
    new Vector(0.7071, -0.7071), // 45 degrees
    new Vector(1, 0), // 90 degrees
    new Vector(0.7071, 0.7071), // 135 degrees
    new Vector(0, 1), // 180 degrees
    new Vector(-0.7071, 0.7071), // -135 degrees
    new Vector(-1, 0), // -90 degrees
    new Vector(-0.7071, -0.7071) // -45 degrees
].forEach(printDeg);

console.log("----------");

[
    0, 45, 90, 135, 180, -135, -90, -45
].forEach(printVector);

console.log("----------");

[
    new Vector(0, -10), // 0 degrees
    new Vector(7.071, -7.071), // 45 degrees
    new Vector(10, 0), // 90 degrees
    new Vector(7.071, 7.071), // 135 degrees
    new Vector(0, 10), // 180 degrees
    new Vector(-7.071, 7.071), // -135 degrees
    new Vector(-10, 0), // -90 degrees
    new Vector(-7.071, -7.071) // -45 degrees
].forEach(printRad);
