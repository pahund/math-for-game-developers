/**
 * Video 6: Character Movement 5 (Unit-Length Vectors)
 *
 * https://www.youtube.com/watch?v=hh-3xLawoYo
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Point = require("./math/Point"),

    p = new Point(1, 2),
    i = new Point(3, 4),
    pi = i.subtractPoint(p),
    normalized = pi.normalized;

console.log("Pacman's view vector: (" + normalized.x + ", " + normalized.y + ")");
console.log("Pacman's view vector length: " + normalized.length);
