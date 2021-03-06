/**
 * Video 5: Character Movement 4 (Vector Scaling)
 *
 * https://www.youtube.com/watch?v=U3mbQrLu7E8
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Vector = require("./math/Vector"),

    v = new Vector(3, 4),
    doubled = v.multiply(2),
    halved = v.divide(2);

console.log("Pacman's initial speed: " + v.length);
console.log("Pacman's doubled speed: " + doubled.length);
console.log("Pacman's halved speed: " + halved.length);
