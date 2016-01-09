/**
 * Video 1: Character Movement (Points and Vectors)
 *
 * https://www.youtube.com/watch?v=sKCF8A3XGxQ
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Vector = require("./math/Vector"),
    Point = require("./math/Point"),

    p = new Point(1, 0),
    v = new Vector(2, 3),
    p2 = p.addVector(v);

console.log("Add vector result: (" + p2.x + ", " + p2.y + ")");
